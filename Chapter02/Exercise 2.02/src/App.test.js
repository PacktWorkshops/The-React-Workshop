import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow, mount } from "enzyme";

describe(App, () => {
  const component = shallow(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("contains the form", () => {
    expect(component.find("input").length).toEqual(4);
    expect(component.find("button").length).toEqual(1);
    expect(
      component
        .find("div")
        .at(0)
        .text()
        .indexOf("Create Account")
    ).not.toEqual(-1);
  });

  it("calls submitForm", () => {
    const submitForm = jest.spyOn(App.prototype, "submitForm");
    const wrapper = mount(<App />);
    wrapper.find("button").simulate("click");
    expect(submitForm).toHaveBeenCalledTimes(1);
  });
});
