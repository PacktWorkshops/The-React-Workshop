import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount } from "enzyme";

import Recipe from "./Recipe";
import RecipeList from "./RecipeList";

describe(App, () => {
  const component = mount(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("includes the RecipeList component", () => {
    expect(component.find(RecipeList).length > 0).toEqual(true);
  });

  it("includes the Recipe component", () => {
    expect(component.find(Recipe).length > 0).toEqual(true);
  });
});
