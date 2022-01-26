import React, { useState } from "react";
import Letter from "../../components/letter/letter";
import classes from "./game.module.css";

function Game() {
  console.log("here");
  const [word, setWord] = useState("words");
  const [maxAttempts, setMaxAttempts] = useState(6);
  const [attemptCount, setAttemptCount] = useState(0);
  const [numLetters, setNumberLetters] = useState(5);

  let letters = [];
  for (let i = 0; i < word.length; i++) {
    letters.push(<Letter letter={word[i]} wrongPlace />);
  }
  return (
    <div>
      <p>Game</p>
      {letters}
    </div>
  );
}

export default Game;
