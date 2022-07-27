import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";
import Notice from "./components/Notice";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleClickBox = (boxID) => {
    const updateBoard = board.map((value, index) => {
      if (index === boxID) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updateBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }

      console.log(scores);
    }
    setBoard(updateBoard);

    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let index = 0; index < WIN_CONDITIONS.length; index++) {
      const [x, y, z] = WIN_CONDITIONS[index];

      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <h1 className="title-text">GAME CỜ CA-RO</h1>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleClickBox} />
      <ResetButton resetBoard={resetBoard} />
      <Notice xPlaying={xPlaying} gameOver={gameOver} resetBoard={resetBoard} />
    </div>
  );
}

export default App;
