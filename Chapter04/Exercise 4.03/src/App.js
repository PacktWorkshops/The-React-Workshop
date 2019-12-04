import React, { Component } from 'react';

class StaticApp extends Component {
  static timesCalled = 0;
  constructor(props) {
    super(props);
    StaticApp.timesCalled += 1;
  }
  render() {
    return <p>Times Called: {StaticApp.timesCalled}</p>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        Static Test
        <StaticApp />
        <StaticApp />
        <StaticApp />
      </div>
    );
  }
}

export default App;
