import React from "react";
import { render, cleanup } from "@testing-library/react";
import Loader from "./Loader";

afterEach(cleanup);

it("renders loader", () => {
  const { asFragment } = render(<Loader spinnerSize={50} isVisible={true} />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders null when isVisible is set to false", () => {
  const { container } = render(<Loader spinnerSize={50} isVisible={false} />);
  expect(container.firstChild).toBeNull();
});

it("sets the right svg size", () => {
  const spinnerSize = 100;
  const { container } = render(
    <Loader spinnerSize={spinnerSize} isVisible={true} />
  );
  expect(container.querySelector("svg").getAttribute("height")).toBe(
    spinnerSize.toString()
  );
  expect(container.querySelector("svg").getAttribute("width")).toBe(
    spinnerSize.toString()
  );
});
