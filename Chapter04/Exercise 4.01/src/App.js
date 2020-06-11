import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = { cycle: 0 };
    setInterval(
      () => this.setState({ cycle: this.state.cycle + 1 }),
      1000
    );
  } 

  componentDidMount() {
    console.log("Component Did Mount");
    }
    
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  render() {
    console.log("Render");
    return (
        <div className="App">Hello Lifecycle: Cycle {this.state.cycle}</div>
    );
  }
}

export default App;