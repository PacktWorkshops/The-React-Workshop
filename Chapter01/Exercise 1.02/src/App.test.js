import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("contains the Hello React text", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains("Hello React!")).toEqual(true);
});
