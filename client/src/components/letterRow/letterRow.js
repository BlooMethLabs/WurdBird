import React from 'react';
import Letter from '../letter/letter';
import classes from './letterRow.module.css';

function LetterRow(props) {
  let letters = [];
  for (let i = 0; i < props.letters.length; i++) {
    console.log(props.letters[i])
    letters.push(<Letter letter={props.letters[i]} wrongPlace />);
  }
  return (
    <div className={classes.letterRow}>
      {letters}
    </div>
  );
}

export default LetterRow;