import React from "react";
import { RecipeContext } from "./RecipeService";

const Recipe = () => {
  const { selectedRecipe } = React.useContext(RecipeContext);
  return (
    <div className="Recipe">
      <h1>Selected Recipe</h1>
      <strong>{selectedRecipe.title}</strong>
      <ul>
        {selectedRecipe.steps.map((step, index) => (
          <li key={`s-${index}`}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
