import React from "react";
import "./App.css";
import Loader from "./Loader";

function App() {
  return (
    <div className="App">
      <Loader spinnerSize={60} isVisible={true} />,
    </div>
  );
}

export default App;
