import React, { Component } from "react";
// styles
import "./App.css";
// data
import productData from "./products.json";
// components
import { ProductListing } from "./components/ProductListing";
import { Tags } from "./components/Tags";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: null
    };
    this.handleTags = this.handleTags.bind(this);
  }
  handleTags(tagName) {
    return () => {
      this.setState({ selectedTag: tagName });
    };
  }
  render() {
    const { products, ingredients } = productData;
    const { selectedTag } = this.state;

    return (
      <div className="container">
        <h1>Products</h1>
        <Tags
          tags={ingredients}
          selectedTag={selectedTag}
          handleTags={this.handleTags}
        />
        <ProductListing products={products} selectedTag={selectedTag} />
      </div>
    );
  }
}

export default App;
