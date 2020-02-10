import React from "react";
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

it("renders the right information", () => {
  const { container } = render(<Product product={product} />);
  expect(container.querySelector("h2").innerHTML).toBe(product.name);
  expect(container.querySelector("strong").innerHTML).toBe("$" + product.price);
});

it("product information is visible when the button is clicked", () => {
  const { container } = render(<Product product={product} />);
  expect(container.firstChild.lastChild.firstChild).toBeNull();
  fireEvent.click(container.querySelector("button"));
  expect(container.firstChild.lastChild.firstChild.innerHTML).toBe(
    product.summary
  );
});
