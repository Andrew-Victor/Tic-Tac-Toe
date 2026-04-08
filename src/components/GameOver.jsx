export default function GameOver({ winner, restart }) {
  return (
    <div id="game-over">
      <h2>GAME OVER !</h2>
      <p> {winner === "draw" ? "Draw" : `${winner} WON`} </p>
      <p>
        <button onClick={restart}>Rematch</button>
      </p>
    </div>
  );
}
