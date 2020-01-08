import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount, shallow } from "enzyme";

describe(App, () => {
  const component = mount(<App />);

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

  it("adds an error after leaving username blank", () => {
    const field = component.find("input").at(0);
    field.simulate("blur");
    expect(
      component.state("errors").indexOf("Username must be filled out!")
    ).not.toEqual(-1);
  });

  it("adds an error after leaving password blank", () => {
    const field = component.find("input").at(1);
    field.simulate("blur");
    expect(
      component.state("errors").indexOf("Password must be filled out!")
    ).not.toEqual(-1);
  });

  it("adds an error after leaving email blank", () => {
    const field = component.find("input").at(3);
    field.simulate("blur");
    expect(
      component
        .state("errors")
        .indexOf("Email must be in a standard email format!")
    ).not.toEqual(-1);
  });

  it("adds an error if password and password confirmation do not match", () => {
    const field = component.find("input").at(2);
    field.simulate("blur", { target: { value: "foo" } });
    console.log(component.state("errors"));
    expect(
      component
        .state("errors")
        .indexOf("Password must match password confirmation!")
    ).not.toEqual(-1);
  });

  it("displays an error div that is not empty", () => {
    expect(component.find("div.errors > p").length > 0).toEqual(true);
  });
});
