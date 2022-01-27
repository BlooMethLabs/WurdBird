import React from "react";
import classes from "./keyboard.module.css";

function Keyboard(props) {
  let clickKey = (event) => {
    props.onClickKey(event.target.value);
  };

  let clickDelete = () => {
    props.onClickDelete();
  };

  let clickEnter = () => {
    props.onClickEnter();
  };

  return (
    <div>
      <input onChange={clickKey} value=""></input>
      <button onClick={clickDelete}>Delete</button>
      <button onClick={clickEnter}>Enter</button>
    </div>
  );
}

export default Keyboard;
