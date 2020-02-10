import React from "react";
import { render, cleanup } from "@testing-library/react";
import CommentSection from "./index";

afterEach(cleanup);

it("renders CommentSection", () => {
  const { asFragment } = render(<CommentSection />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders nothing when comment is not defined", () => {
  const { container } = render(<CommentSection />);
  expect(container.firstChild).toBeNull();
});

it("renders nothing when empty comment", () => {
  const { container } = render(<CommentSection comments={[]} />);
  expect(container.firstChild).toBeNull();
});

const comments = [
  {
    name: "Karen Michaels",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
    image:
      "https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?auto=format&fit=crop&w=200&q=80",
    time: "Oct 10, 2019"
  },
  {
    name: "Tim Parker",
    text:
      "Tullam elementum vulputate lectus sed pellentesque. Maecenas convallis orci at elit consectetur tempus ac id.",
    image:
      "https://images.unsplash.com/photo-1505247964246-1f0a90443c36?auto=format&fit=crop&w=200&q=80",
    time: "Oct 05, 2019"
  }
];

it("renders 2 comments when they are provided", () => {
  const { container } = render(<CommentSection comments={comments} />);
  expect(container.querySelectorAll("div.comment").length).toBe(2);
});
