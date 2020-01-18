import React from "react";
// styles
import "./App.css";
// components
import CommentSection from "./components/CommentSection/";
// data
import { comments } from "./comments.json";

function App() {
  return (
    <div className="container">
      <CommentSection comments={comments} />
    </div>
  );
}

export default App;
