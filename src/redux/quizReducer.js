import React from "react";
import Data from "../hardcode/data.json";

const Shuffle = () => Data.sort(() => Math.random() - 0.5);

const initialstate = {
  username: "",
  isFinished: false,
  score: 0,
  questions: Shuffle(),
};

const Reducer = (state = initialstate, action) => {
  console.log("redu", action.type);

  switch (action.type) {
    case "enterUser":
      return { ...state, username: action.payload };
    case "updateScore": {
      return { ...state, score: state.score + 2 };
    }
    case "finished":
      return { ...state, isFinished: true };
    default:
      return state;
  }
};

export default Reducer;
