import React, { useState } from "react";
import LetterRow from "../../components/letterRow/letterRow";
import Keyboard from "../../components/keyboard/keyboard";
import classes from "./game.module.css";

function Game() {
  const [word, setWord] = useState("MANDY");
  const [maxAttempts, setMaxAttempts] = useState(6);
  const [attemptCount, setAttemptCount] = useState(0);
  const [letterRows, setLetterRows] = useState([]);
  const [currentLetterRow, setCurrentLetterRow] = useState([]);

  let addLetter = (l) => {
    if (currentLetterRow.length < word.length) {
      let newCurrentLetterRow = [...currentLetterRow, l];
      setCurrentLetterRow(newCurrentLetterRow);
      let newLetterRows = [...letterRows.slice(0, -1), newCurrentLetterRow];
      setLetterRows(newLetterRows);
    }
  };

  let deleteLetter = () => {
    if (currentLetterRow.length > 0) {
      let newCurrentLetterRow = currentLetterRow.slice(0, -1);
      setCurrentLetterRow(newCurrentLetterRow);
      let newLetterRows = [...letterRows.slice(0, -1), newCurrentLetterRow];
      setLetterRows(newLetterRows);
    }
  };

  let guessWord = (w) => {
    if (
      currentLetterRow.length == word.length &&
      attemptCount < maxAttempts - 1
    ) {
      setCurrentLetterRow("");
      let newLetterRows = [...letterRows, ""];
      setLetterRows(newLetterRows);
      let newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);
    }
  };

  let letterRowsToDisplay = [];
  for (let i = 0; i < letterRows.length; i++) {
    letterRowsToDisplay.push(
      <LetterRow
        letters={letterRows[i]}
        word={i == letterRows.length - 1 ? null : word}
      />
    );
  }

  return (
    <div className={classes.game}>
      <p>Game</p>
      <div className={classes.letterArea}>{letterRowsToDisplay}</div>
      <div className={classes.keyboard}>
        <Keyboard
          onClickKey={addLetter}
          onClickDelete={deleteLetter}
          onClickEnter={guessWord}
        />
      </div>
    </div>
  );
}

export default Game;
