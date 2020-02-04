import React from "react";
import { RecipeContext } from "./RecipeService";

const RecipeList = () => {
  const { recipes, setSelectedRecipe } = React.useContext(RecipeContext);
  return (
    <div className="RecipeList">
      <h1>Recipes</h1>
      <ul>
        {recipes != null
          ? recipes.map((recipe, index) => (
              <li key={`r-${index}`} onClick={() => setSelectedRecipe(recipe)}>
                {recipe.title}
              </li>
            ))
          : "Recipes loading..."}
      </ul>
    </div>
  );
};

export default RecipeList;
