import React from "react";
import { render, cleanup } from "@testing-library/react";
import Profile from "./Profile";

afterEach(cleanup);

const user = {
  name: "Brian",
  interests: "Reading, Swimming, Technology",
  age: 9,
  image:
    "https://images.unsplash.com/photo-1470071131384-001b85755536?auto=format&fit=crop&w=200&q=80",
  color: "Red",
  movie: "Star Wars"
};

const withMarkup = query => text =>
  query((content, node) => {
    const hasText = node => node.textContent === text;
    const childrenDontHaveText = Array.from(node.children).every(
      child => !hasText(child)
    );
    return hasText(node) && childrenDontHaveText;
  });

it("renders profile", () => {
  const { asFragment } = render(<Profile user={user} />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders name", () => {
  const { getByText } = render(<Profile user={user} />);
  expect(!!withMarkup(getByText)(user.name)).toBe(true);
});

it("renders Age", () => {
  const { getByText } = render(<Profile user={user} />);
  expect(!!withMarkup(getByText)("Age: " + user.age)).toBe(true);
});

it("renders Interests", () => {
  const { getByText } = render(<Profile user={user} />);
  expect(!!withMarkup(getByText)("Interests: " + user.interests)).toBe(true);
});

it("renders Favourite Color", () => {
  const { getByText } = render(<Profile user={user} />);
  expect(!!withMarkup(getByText)("Favourite Color: " + user.color)).toBe(true);
});

it("renders Favourite Movie", () => {
  const { getByText } = render(<Profile user={user} />);
  expect(!!withMarkup(getByText)("Favourite Movie: " + user.movie)).toBe(true);
});
