import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="Example" id="my-element">
        <div
          className="greeting"
          style={{ background: "black", color: "white" }}
          onClick={() => alert("hello")}
        >
          Hello World
        </div>
      </div>
    );
  }
}

export default App;
