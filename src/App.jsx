import { act, useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
function App() {
  // who should know active player? 2
  // Gameboard to decide which symbol should be used
  //player nafso 3alshan el display bta3o
  // who should update active player ?? --> GameBoard
  // who should know the gameBoard ?? App & GameBoard as app needs to know the winner or the draw to display game over comp

  let [activePlayer, setActivePlayer] = useState("X");
  const changeActivePlayer = () => {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X",
    );
  };

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
        />
      </div>
    </main>
  );
}

export default App;
