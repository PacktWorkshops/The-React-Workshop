import React from "react";
import "./App.css";
import Profile from "./Profile";

const user = {
  name: "Brian",
  interests: "Reading, Swimming, Technology",
  age: 9,
  image:
    "https://images.unsplash.com/photo-1470071131384-001b85755536?auto=format&fit=crop&w=200&q=80",
  color: "Red",
  movie: "Star Wars"
};

function App() {
  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
}

export default App;
