import React from 'react';
import '../App.css';

export default function MyButton({ set, item }) {
  return (
    <button type="button" className="myButton" onClick={set} disabled={!item} data-tooltip="Добавить?" > ✚ </button>
  )
}
/* <button className={classes.myButton} onClick={set} disabled={!item}>Добавить</button>*/
/*className="btn btn-primary"*/
