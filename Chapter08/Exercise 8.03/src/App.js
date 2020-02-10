import React, { Component } from 'react';
import {MyEnhancedLoginForm} from "./WithFormikExample";
import './App.css';

class App extends Component {

  render() {
    // And finally, our render method. Nothing too terribly interesting here.
    return (
      <div className="App">
        <MyEnhancedLoginForm />
      </div>
    );
  }
}

export default App;

