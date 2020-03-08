import React from "react";
import { mount } from "enzyme";
import App from "./App";

it("should render have inputRef class field", () => {
  const wrapper = mount(<App />);
  expect(wrapper.instance().inputRef).toBeTruthy();
});
