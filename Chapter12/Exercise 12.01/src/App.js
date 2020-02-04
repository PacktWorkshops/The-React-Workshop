import React from "react";
import "./App.css";

const App = () => {
  const [stock, setStock] = React.useState([]);
  const addStock = () => {
    setStock(prevStock => {
      console.log("Adding new item...");
      return [...prevStock, "New Item"];
    });
  };
  return (
    <div className="App">
      {stock.map((s, index) => (
        <p key={`s-${index}`}>{s}</p>
      ))}
      <button onClick={addStock}>Add New Item</button>
    </div>
  );
};

export default App;
