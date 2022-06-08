import "./App.css";
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
      {/* <YoutubeList>
        {name}
      </YoutubeList> */}
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      <Game></Game>
    </div>
  );
}

export default App;
