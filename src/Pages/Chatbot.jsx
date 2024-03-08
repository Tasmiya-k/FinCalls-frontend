import React from "react";

const streamlitAppUrl = "http://localhost:8501";

const Chatbot = ({ url }) => {
  return (
    <div>
      <iframe
        src={streamlitAppUrl}
        title="Chatbot"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Chatbot;
