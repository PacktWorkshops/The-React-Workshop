import React from "react";
import { mount } from "enzyme";
import App, { FocusableInput } from "./App";

global.console = { log: jest.fn() };

it("should have clicked first input", () => {
  const wrapper = mount(<App />);
  const firstBtnInput = wrapper.find("input").first();

  firstBtnInput.simulate("click");

  expect(console.log).toHaveBeenCalledWith("you clicked the", "first Button");
});
