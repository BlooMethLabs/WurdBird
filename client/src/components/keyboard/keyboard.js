import React from "react";
import useEventListener from "use-event-listener";
import classes from "./keyboard.module.css";
import Aux from "../../hoc/aux/aux";

function Keyboard(props) {
  const keyRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"],
  ];
  let pressKey = (key) => {
    console.log(key);
    if (key.length === 1 && key.match(/[a-z]/i)) {
      props.onClickKey(key.toUpperCase());
    } else if (key === "Enter") {
      props.onClickEnter();
    } else if (key === "Delete" || key == "Backspace") {
      props.onClickDelete();
    }
  };

  useEventListener("keydown", (event) => pressKey(event.key));

  let keys = keyRows.map((row) => (
    <div className={classes.keyRow}>
      {row.map((key) => {
        let classNames = [classes.key];
        if (props.correctKeys.includes(key)) {
          classNames.push(classes.correct);
        } else if (props.wrongPositionKeys.includes(key)) {
          classNames.push(classes.wrongPosition);
        } else if (props.incorrectKeys.includes(key)) {
          classNames.push(classes.incorrect);
        }
        return (
          <button
            className={classNames.join(" ")}
            onClick={() => pressKey(key)}
          >
            <p>{key}</p>
          </button>
        );
      })}
    </div>
  ));
  return <Aux className={classes.keyboard}>{keys}</Aux>;
}

export default Keyboard;
