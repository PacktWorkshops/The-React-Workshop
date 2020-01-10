import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from "enzyme";

describe(App, () => {
  const spy = jest.spyOn(React, "useState");
  const wrapper = mount(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("starts with the image hidden", () => {
    expect(wrapper.find("img").length).toEqual(0);
  });

  it("then toggles the image display", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("img").length).toEqual(1);
    expect(spy).toHaveBeenCalled();
  });
});
