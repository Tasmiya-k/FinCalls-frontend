import React from "react";

const Timeline = ({
  highlighted_past,
  percent_past,
  highlighted_present,
  percent_present,
  highlighted_future,
  percent_future,
  plot_url,
}) => {
  return (
    <div style={{ display: "flex", height: "100vh", margin: 0 }}>
      <div
        id="left-column"
        style={{ flex: 1, overflowY: "auto", padding: "10px" }}
      >
        <h1>Analysis Result</h1>

        <div>
          <h2>Past Tense</h2>
          {highlighted_past.map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
          <p>Percentage of Past Tense Sentences: {percent_past}%</p>
        </div>

        <div>
          <h2>Present Tense</h2>
          {highlighted_present.map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
          <p>Percentage of Present Tense Sentences: {percent_present}%</p>
        </div>

        <div>
          <h2>Future Tense</h2>
          {highlighted_future.map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
          <p>Percentage of Future Tense Sentences: {percent_future}%</p>
        </div>
      </div>

      <div id="right-column" style={{ flex: 1, padding: "10px" }}>
        <img
          src={`data:image/png;base64,${plot_url}`}
          alt="Distribution of Tenses"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Timeline;
