import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Comment } from "./index";

afterEach(cleanup);

const withMarkup = query => text =>
  query((content, node) => {
    const hasText = node => node.textContent === text;
    const childrenDontHaveText = Array.from(node.children).every(
      child => !hasText(child)
    );
    return hasText(node) && childrenDontHaveText;
  });

const comment = {
  name: "Karen Michaels",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
  image:
    "https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?auto=format&fit=crop&w=200&q=80",
  time: "Oct 10, 2019"
};

it("renders comment", () => {
  const { asFragment } = render(<Comment comment={comment} />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders name", () => {
  const { getByText } = render(<Comment comment={comment} />);
  expect(!!withMarkup(getByText)(comment.name)).toBe(true);
});

it("renders text", () => {
  const { getByText } = render(<Comment comment={comment} />);
  expect(!!withMarkup(getByText)(comment.text)).toBe(true);
});

it("renders time", () => {
  const { getByText } = render(<Comment comment={comment} />);
  expect(!!withMarkup(getByText)(comment.time)).toBe(true);
});
