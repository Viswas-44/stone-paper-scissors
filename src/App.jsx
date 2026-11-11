
import Home from "./home";
import Game from "./game";

function App() {
  const path = window.location.pathname;

  if (path === "/game") {
    return <Game />;
  }

  return <Home />;
}

export default App;
