import React, { Component } from 'react';
 
const Greeting = props => <p>Hello {props.name}!</p>;
 
class App extends Component {
  constructor(props) {
    super(props);
    this.title = 'React App';
    this.state = { clickCounter: 0 };
  }
  renderClickCount() {
    return <p>I've been clicked {this.state.clickCounter} times!</p>;
  }
  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <br />
        <Greeting name="User" />
        <br />
        {this.renderClickCount()}
      </div>
    );
  }
}
 
export default App;

