import React from 'react'

const Child = props => {
  console.log("rendered");

  return "Just a string";
};

const Parent = props => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <button onClick={() => setCounter(prev => prev + 1)}>add one</button>
      <Child />
    </>
  );
};

export default Parent