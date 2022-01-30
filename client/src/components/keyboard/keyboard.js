import React from "react";
import useEventListener from "use-event-listener";
import classes from "./keyboard.module.css";

function Keyboard(props) {
  let pressKey = (event) => {
    let key = event.key;
    if (key.length === 1 && key.match(/[a-z]/i)) {
      props.onClickKey(key.toUpperCase());
    } else if (key === "Enter") {
      props.onClickEnter();
    } else if (key === "Delete" || key == "Backspace") {
      props.onClickDelete();
    }
  };

  useEventListener("keydown", pressKey);

  return (
    <div>
      {/* <input onChange={clickKey} onKeyDown={pressKey} value=""></input>
      <button onClick={clickDelete}>Delete</button>
      <button onClick={clickEnter}>Enter</button> */}
    </div>
  );
}

export default Keyboard;
