import React, { useState } from "react";
import LetterRow from "../../components/letterRow/letterRow";
import classes from "./game.module.css";

function Game() {
  console.log("here");
  const [word, setWord] = useState("words");
  const [maxAttempts, setMaxAttempts] = useState(6);
  const [attemptCount, setAttemptCount] = useState(0);
  const [numLetters, setNumberLetters] = useState(5);

  let letterRows = [];
  for (let i = 0; i < maxAttempts; i++) {
    letterRows.push(<LetterRow letters={word} />)
  }
  return (
    <div className={classes.game}>
      <p>Game</p>
      <div className={classes.letterArea}>
        {letterRows}
      </div>
      <div className={classes.keyArea}></div>
    </div>
  );
}

export default Game;
