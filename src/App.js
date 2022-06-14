import "./App.css";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
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
      <CardList>
        <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </div>
  );
}

export default App;
