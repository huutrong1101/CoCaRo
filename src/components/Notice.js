import React from "react";
import "./Notice.css";

function Notice({ xPlaying, gameOver, resetBoard }) {
  return (
    <>
      {gameOver && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={resetBoard}>
              <i class="fa-solid fa-xmark"></i>
            </button>
            <h1>THÔNG BÁO</h1>
            <h3 className="text-popup">Winner is: {xPlaying ? "O" : "X"}</h3>          
          </div>
        </div>
      )}
    </>
  );
}

export default Notice;
