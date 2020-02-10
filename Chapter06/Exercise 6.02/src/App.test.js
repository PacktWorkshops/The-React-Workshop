import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
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

test("renders modal content on click", () => {
  const { container, getByText } = render(<App />);
  expect(container.firstChild.lastChild.innerHTML).toBe("Show Modal");
  fireEvent.click(getByText("Show Modal"));
  expect(container.firstChild.lastChild.innerHTML).not.toBe("Show Modal");
  expect(
    container.firstChild.lastChild.firstChild.classList.contains(
      "modal_content"
    )
  ).toBe(true);
});
