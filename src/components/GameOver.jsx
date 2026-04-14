export default function GameOver({ winner, restart, info }) {
  function getWinnerName(winner, info) {
    if (winner === "draw") return "draw";
    else {
      console.log(info);
      return info[winner];
    }
  }
  let winnerName = getWinnerName(winner, info);
  return (
    <div id="game-over">
      <h2>GAME OVER !</h2>
      <p> {winner === "draw" ? "Draw" : `${winnerName} WON`} </p>
      <p>
        <button onClick={restart}>Rematch</button>
      </p>
    </div>
  );
}
