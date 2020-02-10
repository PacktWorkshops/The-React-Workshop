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

  it("adds new stock when the button is clicked", () => {
    const before = component.find("p").length;
    component.find("button").simulate("click");
    const after = component.find("p").length;

    expect(before < after).toEqual(true);
  });
});
