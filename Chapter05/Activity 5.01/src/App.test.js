import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test("renders div with class container", () => {
  const { container } = render(<App />);
  expect(container.firstChild.classList.contains("container")).toBe(true);
});

test("renders component with class comments", () => {
  const { container } = render(<App />);
  expect(container.firstChild.firstChild.classList.contains("comments")).toBe(
    true
  );
});
