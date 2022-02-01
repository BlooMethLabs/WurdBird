import React, { useState, useEffect } from "react";
import LetterRow from "../../components/letterRow/letterRow";
import Keyboard from "../../components/keyboard/keyboard";
import classes from "./game.module.css";

import axios from 'axios';

function Game() {
  const [word, setWord] = useState("MANDY");
  const [success, setSuccess] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [maxAttempts, setMaxAttempts] = useState(6);
  const [attemptCount, setAttemptCount] = useState(0);
  const [letterRows, setLetterRows] = useState([]);
  const [currentLetterRow, setCurrentLetterRow] = useState([]);

  useEffect(() => {
    axios
      .get("/api/getRandomWord")
      .then((res) => {
        console.log(res);
        setWord(res.data.toUpperCase());
      })
      .catch((err) => {
        // TODO error handling
        console.log(err);
      });
  }, []);

  let addLetter = (l) => {
    if (!gameOver && currentLetterRow.length < word.length) {
      let newCurrentLetterRow = [...currentLetterRow, l];
      setCurrentLetterRow(newCurrentLetterRow);
    }
  };

  let deleteLetter = () => {
    if (!gameOver && currentLetterRow.length > 0) {
      let newCurrentLetterRow = [...currentLetterRow.slice(0, -1)];
      setCurrentLetterRow(newCurrentLetterRow);
    }
  };

  let guessWord = async () => {
    if (gameOver || currentLetterRow.length !== word.length) {
      return;
    }
    try {
      let req = { word: currentLetterRow.join('') };
      const res = await axios.get("/api/checkValidWord?" + new URLSearchParams(req));
      console.log(res);
      if (!res.data) {
        alert('Not a valid word!');
        return;
      }
    } catch(err) {
      console.log(err);
      alert('Failed to check if word valid.');
      return;
    }
    let newLetterRows = [...letterRows, currentLetterRow];
    setLetterRows(newLetterRows);
    let newAttemptCount = attemptCount + 1;
    setAttemptCount(newAttemptCount);
    if (currentLetterRow.join("") === word) {
      setSuccess(true);
      setGameOver(true);
      alert(`Solved in ${newAttemptCount} attempts!`);
      return;
    }
    if (newAttemptCount === maxAttempts) {
      setGameOver(true);
      alert(`Failed to find word.`);
    }
    setCurrentLetterRow([]);
  };

  let letterRowsToDisplay = [];
  for (let i = 0; i < letterRows.length; i++) {
    letterRowsToDisplay.push(<LetterRow letters={letterRows[i]} word={word} />);
  }
  if (!gameOver) {
    letterRowsToDisplay.push(
      <LetterRow letters={currentLetterRow} word={word} current />
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
