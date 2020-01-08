import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount } from "enzyme";

describe(App, () => {
  const component = mount(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("starts with the secret message hidden", () => {
    expect(component.state("showSecret")).toEqual(false);
    expect(component.find("div.secret-message").length).toEqual(0);
  });

  it("toggles the secret message when the button is clicked", () => {
    component.find("button").simulate("click");
    expect(component.state("showSecret")).toEqual(true);
    expect(component.find(".secret-message").length).toEqual(1);
  });
});
