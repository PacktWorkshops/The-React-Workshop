import React, { Component } from "react";

import "./styles.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };
    this.toggleDescription = this.toggleDescription.bind(this);
  }
  toggleDescription() {
    this.setState({
      showDescription: !this.state.showDescription
    });
  }
  render() {
    const { name, price, summary } = this.props.product;
    const { showDescription } = this.state;
    return (
      <div className="product">
        <div className="product_header">
          <h2>{name}</h2>
          <div>
            <button onClick={this.toggleDescription}>
              {showDescription ? "-" : "+"}
            </button>
          </div>
        </div>
        <strong>${price}</strong>
        <div>{showDescription && <p>{summary}</p>}</div>
      </div>
    );
  }
}

export { Product };
