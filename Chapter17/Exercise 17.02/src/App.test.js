import React from "react";
import { mount } from "enzyme";
import App from "./App";

it("should have divRef class field", () => {
  const wrapper = mount(<App />);
  expect(wrapper.instance().divRef).toBeTruthy();
});
