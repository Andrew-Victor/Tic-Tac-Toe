import { useState } from "react";
import GameOver from "./GameOver";


export default function GameBoard({
  changeActivePlayer,
  symbol,
  setGameBoard,
  gameBoard,
}) {
  function handleSelectSquare(rowIndex, colIndex, symbol, e) {
    // const buttonValue = e.target.innerText;
    // if (buttonValue) {
    //   return;
    // }
    setGameBoard((prevState) => {
      let updatedBoard = [...prevState.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = symbol;
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
