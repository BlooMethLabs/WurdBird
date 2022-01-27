import React from "react";
import Letter from "../letter/letter";
import classes from "./letterRow.module.css";

function LetterRow(props) {
  let letters = [];
  let wordLetterCount = {};
  let letterStatuses = [];
  if (props.word) {
    // Get the total number of each letter in the word
    for (let i = 0; i < props.word.length; i++) {
      let letter = props.word[i];
      if (wordLetterCount[letter]) {
        wordLetterCount[letter]++;
      } else {
        wordLetterCount[letter] = 1;
      }
    }

    // Mark each letter as being either correct or incorrect
    for (let i = 0; i < props.letters.length; i++) {
      let letter = props.letters[i];
      if (letter === props.word[i]) {
        letterStatuses[i] = "correct";
        wordLetterCount[letter]--;
      } else {
        letterStatuses[i] = "incorrect";
      }
    }

    // Mark letters in wrong place
    for (let i = 0; i < props.letters.length; i++) {
      if (letterStatuses[i] === "correct") {
        continue;
      }
      let letter = props.letters[i];
      if (wordLetterCount[letter]) {
        letterStatuses[i] = "wrong place";
        wordLetterCount[letter]--;
      }
    }
  }

  for (let i = 0; i < props.letters.length; i++) {
    let letter = props.letters[i];
    letters.push(
      <Letter
        letter={letter}
        correct={letterStatuses[i] === "correct"}
        wrongPlace={letterStatuses[i] === "wrong place"}
      />
    );
  }
  return <div className={classes.letterRow}>{letters}</div>;
}

export default LetterRow;
