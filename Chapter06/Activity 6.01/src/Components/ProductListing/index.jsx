import React from "react";

import { Product } from "../Product";

const ProductListing = props => {
  const { products, selectedTag } = props;

  const filteredProduct = selectedTag
    ? products.filter(product => product.tags.includes(selectedTag))
    : products;
  return (
    <div>
      {filteredProduct.map((product, key) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  );
};
export { ProductListing };
