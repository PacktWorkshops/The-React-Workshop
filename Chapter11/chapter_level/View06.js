import React from "react";

const useCounter = initialValue => {
  const [value, setValue] = React.useState(initialValue);

  const increment = () => setValue(prevValue => prevValue + 1);

  const decrement = () => setValue(prevValue => prevValue - 1);

  const reset = () => setValue(initialValue);

  return { value, increment, decrement, reset };
};

const useLogger = value => {
  React.useEffect(() => {
    console.log(value);
  }, [value]);
};

const View = props => {
  const { value, increment, decrement, reset } = useCounter(props.initialValue);

  useLogger(value);

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
