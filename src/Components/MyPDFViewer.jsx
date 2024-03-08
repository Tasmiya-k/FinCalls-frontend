import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"; // Import the default styles

// Define the styles for the container
const containerStyle = {
  width: "50%", // Adjust the width as needed
  height: "50vh", // Adjust the height as needed
  border: "1px solid #ccc", // Add border for better visibility
};

const MyPDFViewer = (props) => {
  return (
    <div style={containerStyle}>
      <Worker>
        <Viewer fileUrl={props.url} />
      </Worker>
    </div>
  );
};

export default MyPDFViewer;
