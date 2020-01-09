import React from "react";
import "./App.css";

import Counter from "./Counter";

const App = () => (
  <div className="App">
    <h1>Counter</h1>
    <Counter initialValue={5} />
  </div>
);

export default App;
