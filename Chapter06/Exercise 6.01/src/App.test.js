import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders app with light theme", () => {
  const { container } = render(<App />);
  expect(container.firstChild.classList.contains("light-theme")).toBe(true);
});

it("switches to dark theme on single click", () => {
  const { container, getByText } = render(<App />);
  fireEvent.click(getByText("Switch Theme"));
  expect(container.firstChild.classList.contains("dark-theme")).toBe(true);
});

it("switches to light theme on two clicks theme", () => {
  const { container, getByText } = render(<App />);
  fireEvent.click(getByText("Switch Theme"));
  fireEvent.click(getByText("Switch Theme"));
  expect(container.firstChild.classList.contains("light-theme")).toBe(true);
});
