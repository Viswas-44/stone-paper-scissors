import { useState } from "react";
import "./App.css";

function Game() {
  const [player, setPlayer] = useState("");
  const [bot, setBot] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [round, setRound] = useState(0);
  const [result, setResult] = useState("Choose your move!");
  const [gameOver, setGameOver] = useState(false);

  function playGame(choice) {
    if (gameOver) return;

    const choices = ["Stone", "Paper", "Scissors"];
    const computer = choices[Math.floor(Math.random() * 3)];

    let p = playerScore;
    let b = botScore;

    setPlayer(choice);
    setBot(computer);

    if (choice === computer) {
      setResult("It's a Draw!");
    } else if (
      (choice === "Stone" && computer === "Scissors") ||
      (choice === "Paper" && computer === "Stone") ||
      (choice === "Scissors" && computer === "Paper")
    ) {
      p++;
      setPlayerScore(p);
      setResult("You Win This Round!");
    } else {
      b++;
      setBotScore(b);
      setResult("Computer Wins This Round!");
    }

    const nextRound = round + 1;
    setRound(nextRound);

    if (p === 3 || b === 3 || nextRound === 5) {
      setGameOver(true);
    }
  }

  function resetGame() {
    setPlayer("");
    setBot("");
    setPlayerScore(0);
    setBotScore(0);
    setRound(0);
    setResult("Choose your move!");
    setGameOver(false);
  }

  return (
    <div className="game">
      <h1>Stone Paper Scissors</h1>
      <h3>Choose your move</h3>

      <button disabled={gameOver} onClick={() => playGame("Stone")}>
        🪨 Stone
      </button>

      <button disabled={gameOver} onClick={() => playGame("Paper")}>
        📄 Paper
      </button>

      <button disabled={gameOver} onClick={() => playGame("Scissors")}>
        ✂️ Scissors
      </button>

      <div className="result">
        <p>Your Choice: {player || "Not selected"}</p>
        <p>Computer's Choice: {bot || "Not selected"}</p>

        <h2>{result}</h2>

        <h3>Your Score: {playerScore}</h3>
        <h3>Computer Score: {botScore}</h3>
        <p>Round: {round} / 5</p>

        {gameOver && (
          <h2>
            {playerScore > botScore
              ? "You Win the Game!"
              : botScore > playerScore
              ? "Computer Wins the Game!"
              : "The Game is a Draw!"}
          </h2>
        )}
      </div>

      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default Game;
