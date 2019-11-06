import React from "react";

const View = props => {
  const [value, setValue] = React.useState(props.initialValue);

  const increment = () => console.log("this should increment the value");

  const decrement = () => console.log("this should decrement the value");

  const reset = () => console.log("this should reset the value");

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
