import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test("renders div with class App", () => {
  const { container } = render(<App />);
  expect(container.firstChild.classList.contains("App")).toBe(true);
});

test("renders component with class spinner", () => {
  const { container } = render(<App />);
  expect(container.firstChild.firstChild.classList.contains("spinner")).toBe(
    true
  );
});
