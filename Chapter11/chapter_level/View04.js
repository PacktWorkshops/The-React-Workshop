import React from "react";

const View = props => {
  const [value, setValue] = React.useState(props.initialValue);

  const increment = () => setValue(prevValue => prevValue + 1);

  const decrement = () => setValue(prevValue => prevValue - 1);

  const reset = () => setValue(props.initialValue);

  return (
    <>
      <div>The current value is: {value}</div>
      <div>
        <button onClick={increment}>click here to increment it</button>
        <button onClick={decrement}>click here to decrement it</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

export default View;
