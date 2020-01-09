import React from "react";
import "./App.css";

const useToggle = initialValue => {
  const [value, setValue] = React.useState(initialValue);
  const toggle = () => setValue(prevValue => !prevValue);
  return [value, toggle];
};

const App = () => {
  const url = "https://images.unsplash.com/photo-1562051036-e0eea191d42f";
  const [displayImage, toggleState] = useToggle(false);
  const toggleImage = () => toggleState(!displayImage);
  return (
    <div className="App">
      {displayImage && <img src={url} alt="Some coffee beans" />}
      <br />
      <button onClick={toggleImage}>Toggle Image Display</button>
    </div>
  );
};

export default App;
