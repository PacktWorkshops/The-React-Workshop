import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from "enzyme";
import Counter from "./Counter";

describe(App, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("includes the Counter", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Counter).length).toEqual(1);
  });
});
