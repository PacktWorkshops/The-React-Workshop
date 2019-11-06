import React, { Component } from "react";

const Header = props => <h1>{props.title}</h1>;

const InventoryItem = props => (
  <div className="InventoryItem">
    <strong>{props.itemName}</strong>
    <hr />
    <p>{props.itemPrice}</p>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { itemName: "Shoe", itemPrice: 5 },
        { itemName: "Sock", itemPrice: 3 }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Header title="BuyStuff" />
        <InventoryItem
          itemName={this.state.items[0].itemName}
          itemPrice={this.state.items[0].itemPrice}
        />
        <InventoryItem
          itemName={this.state.items[1].itemName}
          itemPrice={this.state.items[1].itemPrice}
        />
      </div>
    );
  }
}

export default App;
