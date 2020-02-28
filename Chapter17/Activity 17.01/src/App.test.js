import React from "react";
import { mount } from "enzyme";
import App, { FocusableInput } from "./App";

it("should have focused first input", () => {
  const wrapper = mount(<App />);
  const input = wrapper
    .find(FocusableInput)
    .first()
    .find("input");

  expect(input.is(":focus")).toBe(true);
});
