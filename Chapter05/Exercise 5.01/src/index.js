import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Profile from "./Profile";
import * as serviceWorker from "./serviceWorker";

const user = {
  name: "Brian",
  interests: "Reading, Swimming, Technology",
  age: 9,
  image: "https://i.pravatar.cc/200?img=4",
  color: "Red",
  movie: "Star Wars"
};

ReactDOM.render(<Profile user={user} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
