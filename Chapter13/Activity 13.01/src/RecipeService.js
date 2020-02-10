import React from "react";

const RecipeContext = React.createContext();

const defaultRecipe = { title: "None selected", steps: [] };

const RecipeService = props => {
  const [recipes, setRecipes] = React.useState(null);
  const [selectedRecipe, setSelectedRecipe] = React.useState(defaultRecipe);

  React.useEffect(() => {
    setTimeout(() => {
      setRecipes([
        { title: "Ice", steps: ["Take Water", "Freeze the Water"] },
        {
          title: "Sandwich",
          steps: [
            "Take two slices of bread",
            "Put stuff in the middle of that bread",
            "Eat your sandwich"
          ]
        }
      ]);
    }, 2000);
  }, []);

  return (
    <RecipeContext.Provider
      value={{ recipes, selectedRecipe, setSelectedRecipe }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeService };
