import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Tag } from "./index";

afterEach(cleanup);

it("renders a tag", () => {
  const { asFragment } = render(
    <Tag selectedTag={null} handleTags={() => {}}>
      milk
    </Tag>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders active tag when selected tag matches current tag", () => {
  const { container } = render(
    <Tag selectedTag="milk" handleTags={() => {}}>
      milk
    </Tag>
  );
  expect(container.firstChild.classList.contains("active")).toBe(true);
});
