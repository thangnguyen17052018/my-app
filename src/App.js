import "./App.css";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
import Toggle from "./components/toggle/Toggle";
import YoutubeList from "./components/youtube/YoutubeList";
import "./data.js";

function App() {
  const name = "Rlris";
  function fullName(firstName, lastName) {
    return `${firstName} + ${lastName}`;
  }
  return (
    <div>
      <Card></Card>
    </div>
  );
}

export default App;
