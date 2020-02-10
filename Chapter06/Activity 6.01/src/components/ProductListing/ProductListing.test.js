import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ProductListing } from "./index";

afterEach(cleanup);

const products = [
  {
    id: 1,
    name: "Expresso",
    price: 5.5,
    summary:
      "Galão, grinder mocha, filter plunger pot siphon mug variety est caramelization. Galão cortado medium latte organic aroma dripper lungo extraction crema. Bar variety spoon a fair trade filter iced. To go mocha wings irish kopi-luwak acerbic doppio kopi-luwak viennese saucer aroma arabica.",
    tags: ["black"]
  },
  {
    id: 2,
    name: "Latte",
    price: 4.5,
    summary:
      "Robusta id fair trade, ristretto froth sugar siphon cream. Rich cinnamon aged espresso carajillo skinny acerbic iced. Froth, blue mountain eu mug, coffee carajillo flavour cappuccino and cortado mocha. Est, blue mountain froth roast as trifecta cappuccino.",
    tags: ["milk"]
  }
];

it("renders listing of products", () => {
  const { asFragment, container } = render(
    <ProductListing products={products} selectedTag={null} />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders filtered number of results", () => {
  const { container } = render(
    <ProductListing products={products} selectedTag="milk" />
  );
  expect(container.querySelectorAll("div.product").length).toBe(1);
});
