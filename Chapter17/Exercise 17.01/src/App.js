import React from "react";

class App extends React.Component {
  inputRef;

  render() {
    return (
      <div>
        <input
          ref={refParam => (this.inputRef = refParam)}
          type="file"
          hidden={true}
        />
        <button
          onClick={() => this.inputRef.click()}
          style={{ backgroundColor: "gray", color: "white" }}
        >
          upload document
        </button>
      </div>
    );
  }
}
export default App;
