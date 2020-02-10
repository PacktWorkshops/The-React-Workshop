import React, { useState } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Product } from "./index";

afterEach(cleanup);

const product = {
  id: 1,
  name: "Expresso",
  price: 5.5,
  summary:
    "Galão, grinder mocha, filter plunger pot siphon mug variety est caramelization. Galão cortado medium latte organic aroma dripper lungo extraction crema. Bar variety spoon a fair trade filter iced. To go mocha wings irish kopi-luwak acerbic doppio kopi-luwak viennese saucer aroma arabica.",
  tags: ["black"]
};

it("renders product", () => {
  const { asFragment } = render(<Product product={product} />);
  expect(asFragment()).toMatchSnapshot();
});
