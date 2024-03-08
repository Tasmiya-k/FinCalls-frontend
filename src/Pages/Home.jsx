import Navbar from "../Components/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  //change1
  const [audioFile, setAudioFile] = React.useState(null);
  const [PDFfile, setPDFfile] = React.useState(null);
  const [viewPdf, setviewPdf] = React.useState(null);
  const [fileUploaded, setFileUploaded] = React.useState(false);

  //change2
  const audioFileTypes = ["audio/mpeg", "audio/wav", "audio/mp3"];

  // const fileType = ["application/pdf"];
  const handleSubmit = (e) => {
    let selectedFile = e.target.files[0];
    // if (selectedFile) {
    //   if (selectedFile && fileType.includes(selectedFile.type)) {
    //     let reader = new FileReader();
    //     reader.readAsDataURL(selectedFile);
    //     reader.onload = (event) => {
    //       const pdfData = event.target.result;
    //       setPDFfile(pdfData);
    //       setFileUploaded(true);
    //       setviewPdf(pdfData);
    //       console.log("here");
    //       console.log(PDFfile);
    //     };
    //   } else {
    //     setPDFfile(null);
    //     setFileUploaded(false);
    //   }
    // }

    if (selectedFile) {
      if (selectedFile.type.startsWith("audio/")) {
        setAudioFile(selectedFile);
      } else if (selectedFile.type === "application/pdf") {
        setPDFfile(selectedFile);
      }
      setFileUploaded(true);
    }
  };

  useEffect(() => {
    const uploadFile = async () => {
      if (fileUploaded) {
        const formData = new FormData();
        if (audioFile) formData.append("audioFile", audioFile);
        if (PDFfile) formData.append("pdfFile", PDFfile);

        try {
          const response = await axios.post(
            "http://127.0.0.1:5000/upload_files",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          const { audio_file_id, transcript_file_id, pdf_file_id } =
            response.data;
          if (audio_file_id && transcript_file_id) {
            navigate("/uploaded", {
              state: { audio_file_id, transcript_file_id },
            });
          } else if (pdf_file_id) {
            navigate("/uploaded", {
              state: { pdf_file_id },
            });
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    };

    uploadFile();
  }, [audioFile, fileUploaded, navigate]);

  return (
    <div>
      <Navbar />
      <div className="home-main">
        <div className="home-main-video">
          <video
            controls
            src="videos/Home-video.mp4"
            width="650px"
            height="350px"
          ></video>
        </div>

        <label for="file-upload" class="custom-file-upload">
          <input
            id="file-upload"
            type="file"
            accept=".mp3, .wav, .mpeg ,.pdf"
            style={{ display: "none" }}
            className="button button-home"
            onChange={handleSubmit}
          />
          Upload Earning Call
        </label>

        {/* <button onClick={view}>view</button>
        <div className="pdf-container">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {viewPdf && (
              <>
                <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
              </>
            )}
          </Worker>
        </div> */}
      </div>
    </div>
  );
}
