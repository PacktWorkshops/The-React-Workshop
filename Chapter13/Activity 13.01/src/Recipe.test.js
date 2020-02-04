import React from "react";
import ReactDOM from "react-dom";
import Recipe from "./Recipe";

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

describe(Recipe, () => {
  const component = mount(<Recipe />);
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Recipe />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the selected recipe", () => {
    expect(component.text().indexOf(mockSelectedRecipe.title)).not.toEqual(-1);
    mockSelectedRecipe.steps.forEach(step => {
      expect(component.text().indexOf(step)).not.toEqual(-1);
    });
  });
});
