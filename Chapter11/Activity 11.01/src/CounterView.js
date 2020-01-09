import React from "react";

const CounterView = props => (
  <div className="CounterView">
    <div>The current value is: {props.value}</div>
    <div>
      <button onClick={props.increment}>Click here to increment it</button>
      <button onClick={props.decrement}>Click here to decrement it</button>
      <button onClick={props.reset}>Click here to reset</button>
    </div>
  </div>
);

export default CounterView;
