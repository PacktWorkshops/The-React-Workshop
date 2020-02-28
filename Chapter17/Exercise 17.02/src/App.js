import React from "react";
class App extends React.Component {
  divRef = React.createRef();

  render() {
    return (
      <div
        ref={this.divRef}
        onClick={() => console.log(this.divRef.current.getBoundingClientRect())}
        style={{ width: 80, height: 20, border: "4px solid black" }}
      />
    );
  }
}
export default App;
