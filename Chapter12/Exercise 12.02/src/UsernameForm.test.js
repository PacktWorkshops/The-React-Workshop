import React from "react";
import ReactDOM from "react-dom";
import UsernameForm from "./UsernameForm";

import { mount } from "enzyme";

const contains = (array, term) => {
  return array.indexOf(term) !== -1;
};

describe(UsernameForm, () => {
  const component = mount(<UsernameForm />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UsernameForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("displays an error if the username field is under 3 characters", () => {
    component.find("input").simulate("change", { target: { value: "ab" } });
    component.find("button").simulate("click");
    const errors = component.find("ul.errors > li").map(li => li.text());
    expect(
      contains(errors, "Username must not be under 3 characters!")
    ).toEqual(true);
  });

  it("displays an error if the username entered is a test username", () => {
    component.find("input").simulate("change", { target: { value: "test" } });
    component.find("button").simulate("click");
    const errors = component.find("ul.errors > li").map(li => li.text());
    expect(contains(errors, "Cannot use a test username!")).toEqual(true);
  });

  it("clears the errors out each time the button is clicked", () => {
    component.find("input").simulate("change", { target: { value: "test" } });
    component.find("button").simulate("click");
    component.find("input").simulate("change", { target: { value: "ab" } });
    component.find("button").simulate("click");
    const errors = component.find("ul.errors > li").map(li => li.text());
    expect(contains(errors, "Cannot use a test username!")).toEqual(false);
    expect(
      contains(errors, "Username must not be under 3 characters!")
    ).toEqual(true);
  });
});
