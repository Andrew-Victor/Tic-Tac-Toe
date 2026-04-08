import { act, useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import GameOver from "./components/GameOver";
const intialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function checkWinner(board) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      return board[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    ) {
      return board[0][i];
    }
  }

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

  const isBoardFull = board
    .flat()
    .every((cell) => cell !== null && cell !== "");

  if (isBoardFull) {
    return "draw";
  }

  // Game still in progress
  return null;
}

function App() {
  // who should know active player? 2
  // Gameboard to decide which symbol should be used
  //player nafso 3alshan el display bta3o
  // who should update active player ?? --> GameBoard
  // who should know the gameBoard ?? App & GameBoard as app needs to know the winner or the draw to display game over comp
  //and GameBoard as it needs to render and update board
  const [gameBoard, setGameBoard] = useState(intialBoard);
  let [activePlayer, setActivePlayer] = useState("X");
  const changeActivePlayer = () => {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X",
    );
  };
  const restart = () => {
    setGameBoard(intialBoard);
  };
  let winner = checkWinner(gameBoard);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player symbol="x" isActive={activePlayer === "X" ? true : false} />
          <Player symbol="O" isActive={activePlayer === "O" ? true : false} />
        </ol>
        <GameBoard
          changeActivePlayer={changeActivePlayer}
          symbol={activePlayer}
          setGameBoard={setGameBoard}
          gameBoard={gameBoard}
        />
        {winner && <GameOver winner={winner} restart={restart} />}
      </div>
    </main>
  );
}

export default App;
