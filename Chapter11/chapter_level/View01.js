import React from "react";

const View = props => (
  <>
    <div>The current value is: {props.value}</div>
    <div>
      <button onClick={props.increment}>click here to increment it</button>
      <button onClick={props.decrement}>click here to decrement it</button>
      <button onClick={props.reset}>props.reset</button>
    </div>
  </>
);

export default View;
