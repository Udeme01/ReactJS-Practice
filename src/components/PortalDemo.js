import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>My Portal Demo</h1>,
    document.getElementById("portalDemo")
  );
}

export default PortalDemo;