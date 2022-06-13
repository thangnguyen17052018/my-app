import React, { useReducer, useState } from "react";
import { calculateWinner } from "../../utilities/helper";
import Board from "./Board";
import "./GameStyle.css";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;

      if (winner || board[index]) return state; //if return; will return undefined

      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;

      return nextState;
    }

    case "RESET":
      return initialState;

    default:
      console.log("Error");
    // throw new Error('Error');
  }

  return state;
};

const Game = () => {
  //useReducer
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index, //index : index
        winner,
      },
    });
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
      payload: {},
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
