import React from "react";
import ReactDOM from "react-dom";
import RecipeList from "./RecipeList";

import { mount } from "enzyme";

const mockSetSelectedRecipe = jest.fn(recipe => recipe);
const mockRecipes = [
  { title: "Recipe 1", steps: ["One", "Two"] },
  { title: "Recipe 2", steps: ["Uno", "Dos", "Tres"] }
];
const mockSelectedRecipe = mockRecipes[0];
const mockUseContext = jest.fn(() => {
  return {
    recipes: mockRecipes,
    setSelectedRecipe: mockSetSelectedRecipe,
    selectedRecipe: mockSelectedRecipe
  };
});

React.useContext = mockUseContext;

describe(RecipeList, () => {
  const component = mount(<RecipeList />);
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RecipeList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders all of the mock recipes", () => {
    mockRecipes.forEach(recipe => {
      expect(component.text().indexOf(recipe.title)).not.toEqual(-1);
    });
  });

  it("calls setSelectedRecipe when a recipe is clicked on", () => {
    expect(mockSetSelectedRecipe).not.toHaveBeenCalled();
    component
      .find("li")
      .at(0)
      .simulate("click");
    expect(mockSetSelectedRecipe).toHaveBeenCalled();
    const mockedReturn = mockSetSelectedRecipe.mock.results[0].value;
    expect(mockRecipes.indexOf(mockedReturn)).not.toEqual(-1);
  });
});
