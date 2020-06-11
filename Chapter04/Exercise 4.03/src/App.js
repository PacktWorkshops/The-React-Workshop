import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // State will be messages: ["Hello World", "How are you"]
    this.state = { messages: [], loading: true };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps:', prevProps);
    console.log('prevState:', prevState);
  }
  componentDidMount() {
    setTimeout(() => this.setState({ messages: ["Hello World", "How are you?"], loading: false }),
      10000 // 10 seconds
    );
  }
  componentWillUnmount() {
    alert("I've been removed!");
  }
  renderProfile() {
    if (this.state.loading) {
      return (<div>Loading...</div>);
    }
    if (this.state.messages && this.state.messages.length > 0) {
      return (
        <div>
          <ul>
            {this.state.messages.map((msg, index) => <li key={`msg-${index}`}>{msg}</li>)}
          </ul>
        </div>
      );
    } else {
      return (<div>No messages!</div>);
    }
  }
  render() {
    return (
      <div className="App">
        User Profile
      <hr />
        {this.renderProfile()}
      </div>
    );
  }

}

export default App;