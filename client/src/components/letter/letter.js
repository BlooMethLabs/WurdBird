import React from "react";
import classes from "./letter.module.css";

function Letter(props) {
  console.log(props.letter);
  let classList = [];
  classList.push(classes.letterBox);
  if (props.wrongPlace) {
    classList.push(classes.wrongPlace);
  } else if (props.correct) {
    classList.push(classes.correct);
  }
  return (
    <div className={classList.join(" ")}>
      <p className={classes.letter}>{props.letter}</p>
    </div>
  );
}

export default Letter;
