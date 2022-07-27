import React from "react";
import "./ResetButton.css";

function ResetButton({ resetBoard }) {
  return (
    <button className="reset-btn" onClick={resetBoard}>
      RESET
    </button>
  );
}

export default ResetButton;
