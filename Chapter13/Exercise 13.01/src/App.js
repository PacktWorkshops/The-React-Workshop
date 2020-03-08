import React from "react";

const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = props => {
  const [items, setItems] = React.useState([
    { name: "desk", price: 4 },
    { name: "chair", price: 9 },
    { name: "lamp", price: 3 }
  ]);

  return (
    <ShoppingCartContext.Provider value={[items, setItems]}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

const Checkout = props => {
  return (
    <div
      style={{
        border: "3px solid black",
        padding: 5,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "100%"
      }}
    >
      <>The item will be delivered to 2A, Baird Street, MI 2WX, Manchester</>
      <br />
      <Pay createTransaction={props.createTransaction} />
    </div>
  );
};

const Pay = props => {
  const [items, setItems] = React.useContext(ShoppingCartContext);

  let totalPrice = 0;

  items.forEach(item => {
    totalPrice = totalPrice + item.price;
  });

  return (
    <>
      <div style={{ margin: "8px 0" }}>Total price £{totalPrice}</div>
      <button
        title="Pay now"
        onClick={() => {
          props.createTransaction(totalPrice);
          setItems([]);
        }}
      >
        Pay now
      </button>
    </>
  );
};

const Cart = () => {
  return (
    <div
      style={{
        border: "3px solid black",
        padding: 5,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "100%"
      }}
    >
      <Items />
    </div>
  );
};

const Item = props => {
  return (
    <div
      className="Item"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 5,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "100%"
      }}
    >
      <p>
        {props.name}: £{props.price}
      </p>
      <button onClick={() => props.delete(props.name)}>Remove from Cart</button>
    </div>
  );
};

const Items = () => {
  const [items, setItems] = React.useContext(ShoppingCartContext);

  return items.map(item => {
    return (
      <Item
        key={item.name}
        name={item.name}
        price={item.price}
        delete={() => {
          setItems(prevItems => {
            return prevItems.filter(i => i.name !== item.name);
          });
        }}
      />
    );
  });
};

const App = () => {
  const createTransaction = amount => {
    if (amount !== 0) alert("transaction was created with " + amount);
  };

  return (
    <ShoppingCartProvider>
      <div
        className="App"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Cart />
        <Checkout createTransaction={createTransaction} />
      </div>
    </ShoppingCartProvider>
  );
};

export default App;
