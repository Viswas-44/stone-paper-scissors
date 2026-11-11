import "./home.css";

function Home() {
  return (
    <div className="home">
      <h1>Stone Paper Scissors</h1>

      <p>Welcome to the Game!</p>

      <a href="/game">
        <button>Start Game</button>
      </a>
    </div>
  );
}

export default Home;