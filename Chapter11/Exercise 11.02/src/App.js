import React from "react";
import "./App.css";

const App = () => {
  let [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const loggedInFromLocalStorage = localStorage.getItem("loggedIn");

    if (JSON.parse(loggedInFromLocalStorage) === true) {
      setLoggedIn(true);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  return (
    <div className="App">
      <p>{loggedIn ? "Welcome Back!" : "Logged Out"}</p>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default App;
