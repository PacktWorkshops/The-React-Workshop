import React from "react";
import { mount } from "enzyme";
import App, { StyledButton } from "./App";

global.console = { log: jest.fn() };

it("should have called effect and pass children", () => {
  const wrapper = mount(<App />);
  const btn = wrapper.find(StyledButton);

  expect(console.log).toHaveBeenCalled();
  expect(btn.prop("children")).toBe("This is the button text");
});
