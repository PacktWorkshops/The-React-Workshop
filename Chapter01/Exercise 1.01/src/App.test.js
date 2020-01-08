import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("contains the text hello world", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains("Hello World")).toEqual(true);
  expect(wrapper.hasClass("Example")).toEqual(true);
});
