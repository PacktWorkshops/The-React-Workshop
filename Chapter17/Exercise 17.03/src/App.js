import React from "react";

const App = () => {
  const divRef = React.useRef();

  return (
    <div
      ref={divRef}
      onClick={() => console.log(divRef.current.getBoundingClientRect())}
      style={{ height: 20, width: 80, border: "4px solid black" }}
    />
  );
};

export default App;
