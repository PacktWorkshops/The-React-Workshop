import React from "react";

import CounterView from "./CounterView";

const useCounter = initialValue => {
  const [value, setState] = React.useState(initialValue);
  const increment = () => setState(value + 1);
  const decrement = () => setState(value - 1);
  const reset = () => setState(initialValue);
  return { value, increment, decrement, reset };
};

const useLogger = value => {
  React.useEffect(() => {
    console.log("Value changed:", value);
  }, [value]);
};

const Counter = props => {
  const { value, increment, decrement, reset } = useCounter(props.initialValue);
  useLogger(value);

  return (
    <CounterView
      increment={increment}
      decrement={decrement}
      value={value}
      reset={reset}
    />
  );
};

export default Counter;
