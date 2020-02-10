import React, { useState } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Tags } from "./index";

afterEach(cleanup);

const tags = ["black", "chocolate", "milk", "froth", "water"];

it("renders listing of products", () => {
  const { asFragment } = render(
    <Tags tags={tags} selectedTag={null} handleTags={() => {}} />
  );
  expect(asFragment()).toMatchSnapshot();
});
