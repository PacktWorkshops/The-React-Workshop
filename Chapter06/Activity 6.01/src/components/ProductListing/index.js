import React from "react";
// components
import { Product } from "../Product";

const ProductListing = props => {
  const { products, selectedTag } = props;

  const filteredProduct = selectedTag
    ? products.filter(product => product.tags.includes(selectedTag))
    : products;
  return (
    <div>
      {filteredProduct &&
        filteredProduct.length &&
        filteredProduct.map((product, key) => (
          <Product key={`${product.name}-${key}`} product={product} />
        ))}
    </div>
  );
};
export { ProductListing };
