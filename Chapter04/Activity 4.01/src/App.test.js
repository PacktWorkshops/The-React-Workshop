import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import UserCountDisplay from "./UserCountDisplay";
import LoginDisplay from "./LoginDisplay";

import { mount } from "enzyme";

describe(App, () => {
  const component = mount(<App />);
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("includes all of the sub components", () => {
    expect(component.contains(UserCountDisplay)).toEqual(true);
    expect(component.contains(LoginDisplay)).toEqual(true);
  });
});
