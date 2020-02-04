import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount } from "enzyme";
import UsernameForm from "./UsernameForm";

describe(App, () => {
  const component = mount(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("includes a username form", () => {
    expect(component.find(UsernameForm).length).toEqual(1);
  });
});
