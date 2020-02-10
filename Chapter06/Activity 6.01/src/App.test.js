import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("renders app", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders Products listing component", () => {
  const { container } = render(<App />);
  expect(container.firstChild.firstChild.innerHTML).toBe("Products");
});
