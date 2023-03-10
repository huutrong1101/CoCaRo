import React from "react";
import "./Board.css";
import Box from "./Box";

function Board({ board, onClick }) {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Box
          key={index}
          value={value}
          onClick={() => value === null && onClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
