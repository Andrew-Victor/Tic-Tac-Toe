export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>GAME OVER !</h2>
      <p> {winner==="X" || winner==="O" ? "WON" : "DRAW!"}</p>
      <p>
        <button>Rematch</button>
      </p>
    </div>
  );
}
