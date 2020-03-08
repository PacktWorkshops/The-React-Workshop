import React from "react";
import { mount, shallow } from "enzyme";
import App, { ModalOverlay } from "./App";

it("should not have portaled an modal", () => {
  mount(<App />);

  const body = global.document.querySelector("body");
  const firstChild = body.firstChild;

  expect(body.style.overflowY).toBe("scroll");
  expect(firstChild).toBeFalsy();
});

it("should have portaled an Modal to body and disabled scrolling", () => {
  mount(<ModalOverlay />).setProps({ showModal: true });

  const body = global.document.querySelector("body");
  const firstChild = body.firstChild;

  expect(body.style.overflowY).toBe("hidden");
  expect(firstChild).toBeTruthy();
});
