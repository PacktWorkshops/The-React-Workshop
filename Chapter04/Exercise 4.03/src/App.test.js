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

  it("includes three different static app components", () => {
    const lines = component.find("p").map(p => p.text());
    expect(lines.indexOf("Times Called: 1")).not.toEqual(-1);
    expect(lines.indexOf("Times Called: 2")).not.toEqual(-1);
    expect(lines.indexOf("Times Called: 3")).not.toEqual(-1);
  });
});
