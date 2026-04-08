import { useState } from "react";
import GameOver from "./GameOver";
function checkWinner(board) {
  // 1. Check Rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      return board[i][0]; // Returns 'X' or 'O'
    }
  }

  // 2. Check Columns
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    ) {
      return board[0][i]; // Returns 'X' or 'O'
    }
  }

  // 3. Check Diagonals
  if (
    board[0][0] &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return board[0][0];
  }

  if (
    board[0][2] &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    return board[0][2];
  }

  // 4. Check for Draw
  // Flatten the 2D array and check if any cell is null/empty
  const isBoardFull = board
    .flat()
    .every((cell) => cell !== null && cell !== "");

  if (isBoardFull) {
    return "draw";
  }

  // 5. Game still in progress
  return null;
}
let gameState = false;
const intialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ changeActivePlayer, symbol }) {
  const [gameBoard, setGameBoard] = useState(intialBoard);
  function handleSelectSquare(rowIndex, colIndex, symbol, e) {
    // const buttonValue = e.target.innerText;
    // if (buttonValue) {
    //   return;
    // }
    setGameBoard((prevState) => {
      let updatedBoard = [...prevState.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = symbol;
      gameState = checkWinner(updatedBoard)
      return updatedBoard;
    });
    changeActivePlayer();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol !== null}
                  onClick={(e) =>
                    handleSelectSquare(rowIndex, colIndex, symbol, e)
                  }
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}

    </ol>
  );
}
