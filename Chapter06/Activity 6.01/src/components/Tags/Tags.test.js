import React, { useState } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Tags } from "./index";

afterEach(cleanup);

const tags = ["black", "chocolate", "milk", "froth", "water"];

it("renders a list of tags", () => {
  const { asFragment } = render(
    <Tags tags={tags} selectedTag={null} handleTags={() => {}} />
  );
  expect(asFragment()).toMatchSnapshot();
});

const TagDemo = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  return (
    <Tags
      tags={tags}
      selectedTag={selectedTag}
      handleTags={tag => () => {
        setSelectedTag(tag);
      }}
    />
  );
};

it("sets active tag when a tag is clicked", () => {
  const { container, getByText } = render(<TagDemo />);
  expect(container.querySelectorAll(".active").length).toBe(0);
  const selectedTag = "milk";
  fireEvent.click(getByText(selectedTag));
  expect(container.querySelectorAll(".active").length).toBe(1);
  expect(getByText(selectedTag).classList.contains("active")).toBe(true);
});
