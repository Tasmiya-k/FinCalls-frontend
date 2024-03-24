import Navbar from "../Components/Navbar";
import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useLocation } from "react-router-dom";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { NavLink } from "react-router-dom";
import Timeline from "./Timeline";

// const searchPluginInstance = searchPlugin({
//   onHighlightKeyword: (props: OnHighlightKeyword) => {
//     props.highlightEle.style.outline = "2px dashed blue";
//     props.highlightEle.style.backgroundColor = "rgba(0, 0, 0, .1)";
//   },
// });

export default function AfterUpload(props) {
  const { state } = useLocation();
  const { audio_file_id, transcript_file_id, pdf_file_id } = state || {};

  const [changeDiv, setchangeDiv] = React.useState(false);
  const [transcript, setTranscript] = React.useState(false);
  const [structuredSummary, setStructuredSummary] = React.useState(null);
  const [summary, setsummary] = React.useState(null);
  const [timelineC, settimelineC] = React.useState(null);
  // const [targetWord, setTargetWord] = React.useState("");

  console.log(audio_file_id);
  console.log(transcript_file_id);
  // const viewPdf = props.pdf;

  // function GenerateTranscript(){
  //     setchangeDiv(prev=>!prev);
  // }
  const newplugin1 = defaultLayoutPlugin();
  const newplugin2 = defaultLayoutPlugin();

  const GenerateTranscript = async () => {
    // Call the Flask API to retrieve transcript based on transcript_file_id
    try {
      const response = await fetch("http://localhost:5000/getTranscript", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transcript_file_id, pdf_file_id }), // Send transcript_file_id in the request body
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setTranscript(url);
        setchangeDiv(true);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  //SUMMARY
  const GenerateSummary = async () => {
    try {
      const response = await fetch("http://localhost:5000/getSummary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transcript_file_id, pdf_file_id }),
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const summaryId = response.headers.get("Summary-ID");
        setsummary(summaryId);
        setStructuredSummary(url);
        setTranscript(false);
        setchangeDiv(true);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const GetTimeline = async () => {
    try {
      const response = await fetch("http://localhost:5000/timeline", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transcript_file_id, pdf_file_id }),
      });
      if (response.ok) {
        // Process the response data
        // For example, display the timeline analysis results
        const timelineData = await response.json(); // Parse response data
        settimelineC(timelineData); // Update state with parsed data
        setchangeDiv(true);
        console.log("Timeline analysis results:", await response.json());
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="profile-left">
          <h1 className="home-title">FinCalls</h1>
          <ul className="navitems">
            <li>
              <button
                className="after-upload-butt"
                onClick={GenerateTranscript}
              >
                Generate Transcript
              </button>
            </li>
            <li>
              <button className="after-upload-butt" onClick={GenerateSummary}>
                Generate Summary
              </button>
            </li>
            <li>
              <button className="after-upload-butt" onClick={GetTimeline}>
                Timeline Analysis
              </button>
            </li>
            <li>
              <button className="after-upload-butt">Visualize Data</button>
            </li>
          </ul>
        </div>

        <div className="profile-right">
          <ul className="navitems">
            <li>
              <NavLink
                exact
                to="/home"
                className="nav-link"
                activeClassName="active"
              >
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                ABOUT
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="afterupload-main-sec">
        {/* //When Generate summary is click this should display the pdf received */}
        {changeDiv && (transcript || structuredSummary || timelineC) ? (
          <>
            {transcript && (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={transcript} plugins={[newplugin1]} />
              </Worker>
            )}
            {structuredSummary && (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div>
                  <Viewer fileUrl={structuredSummary} plugins={[newplugin1]} />
                </div>
              </Worker>
            )}
            {timelineC && (
              <div style={{ display: "flex", height: "100vh", margin: 0 }}>
                <div
                  id="left-column"
                  style={{ flex: 1, overflowY: "auto", padding: "10px" }}
                >
                  <h1>Analysis Result</h1>

                  <div>
                    <h2>Past Tense</h2>
                    {timelineC.highlighted_past.map((sentence, index) => (
                      <p key={index}>{sentence}</p>
                    ))}
                    <p>
                      Percentage of Past Tense Sentences:{" "}
                      {timelineC.percent_past}%
                    </p>
                  </div>

                  <div>
                    <h2>Present Tense</h2>
                    {timelineC.highlighted_present.map((sentence, index) => (
                      <p key={index}>{sentence}</p>
                    ))}
                    <p>
                      Percentage of Present Tense Sentences:{" "}
                      {timelineC.percent_present}%
                    </p>
                  </div>

                  <div>
                    <h2>Future Tense</h2>
                    {timelineC.highlighted_future.map((sentence, index) => (
                      <p key={index}>{sentence}</p>
                    ))}
                    <p>
                      Percentage of Future Tense Sentences:{" "}
                      {timelineC.percent_future}%
                    </p>
                  </div>
                </div>

                <div id="right-column" style={{ flex: 1, padding: "10px" }}>
                  <img
                    src={`data:image/png;base64,${timelineC.plot_url}`}
                    alt="Distribution of Tenses"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="afterupload-main-sec">
            <img src="/images/Audio File.png" />
            <h2>Upload Successful</h2>
          </div>
        )}
      </div>
    </div>
  );
}
