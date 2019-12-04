import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = { cycle: 0 };
    setInterval(() => this.setState({ cycle: this.state.cycle + 1 }), 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component Update');
    return this.props !== nextProps || this.state !== nextState;
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  render() {
    console.log('Render');
    return <div className="App">Hello Lifecycle: Cycle {this.state.cycle}</div>;
  }
}

export default App;
