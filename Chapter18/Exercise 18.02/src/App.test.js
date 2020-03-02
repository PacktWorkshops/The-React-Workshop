import React from "react";
import { mount } from "enzyme";
import App from "./App";

it("should have portaled an element to outside DOM", () => {
  mount(<App />);

  const body = global.document.querySelector("body");
  const firstChild = body.firstChild;

  expect(body.style.overflowY).toBe("hidden");
  expect(firstChild.style.justifyContent).toBe("center");
});
