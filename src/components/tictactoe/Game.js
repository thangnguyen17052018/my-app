import React, { useState } from "react";
import { calculateWinner } from "../../utilities/helper";
import Board from "./Board";
import "./GameStyle.css";

const Game = () => {

  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true
  });

  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    const boardCopy = [...state.board];

    if (winner || boardCopy[index]) return;

    boardCopy[index] = state.xIsNext ? "X" : "O";

    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext
    });
  };

  const handleResetGame = () => {
    setState({
      ...state,
      board: Array(9).fill(null),
      xIsNext: true
    });
  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && (
        <div className="game-winner">
          {winner ? `Winner is ${state.xIsNext ? "O" : "X"}` : ""}
        </div>
      )}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
