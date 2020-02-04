import React from "react";
import "./App.css";

import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
import { RecipeService } from "./RecipeService";

const App = () => {
  return (
    <RecipeService>
      <div className="App">
        <RecipeList />
        <Recipe />
      </div>
    </RecipeService>
  );
};

export default App;
