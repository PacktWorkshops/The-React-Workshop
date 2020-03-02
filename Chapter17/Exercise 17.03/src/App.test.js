import React from "react";
import { mount } from "enzyme";
import App from "./App";

it("should have div with styles", () => {
  const wrapper = mount(<App />);
  const d = wrapper.find("div");

  expect(d.prop("style")).toStrictEqual({
    border: "4px solid black",
    height: 20,
    width: 80
  });
});
