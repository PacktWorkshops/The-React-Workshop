import React from "react";

const ShoppingCardContext = React.createContext();

const Flex = props => (
  <div style={{ padding: 5, flexGrow: 1, flexShrink: 1, flexBasis: "100%" }}>
    {props.children}
  </div>
);

const Border = props => (
  <div
    style={{
      borderWidth: 3,
      padding: 5,
      borderStyle: "solid",
      borderColor: "black"
    }}
  >
    {props.children}
  </div>
);

const Item = props => {
  const [, setItems] = React.useContext(ShoppingCardContext);

  return (
    <div
      style={{ padding: 5, display: "flex", justifyContent: "space-between" }}
    >
      {`${props.name}:  £${props.price}`}
      <button
        onClick={() => {
          setItems(prevItems => {
            return prevItems.filter(item => item.name !== props.name);
          });
        }}
      >
        delete item
      </button>
    </div>
  );
};

const Cart = () => {
  const [items] = React.useContext(ShoppingCardContext);

  return (
    <Flex>
      <Border>
        {items.map(item => {
          return <Item key={item.name} name={item.name} price={item.price} />;
        })}
      </Border>
    </Flex>
  );
};

const Checkout = props => {
  const [items] = React.useContext(ShoppingCardContext);

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div style={{ margin: "8px 0" }}>Total price £{totalPrice}</div>
      <button
        title="Pay now"
        onClick={() => {
          props.createTransaction(totalPrice);
        }}
      >
        Pay now
      </button>
    </>
  );
};

const Address = props => {
  return `Item will be delivered to: ${props.houseNumber}, ${
    props.streetName
  }, ${props.postalCode}, ${props.city}`;
};

const Info = props => {
  return (
    <Flex>
      <Border>
        <Address
          streetName={props.user.address.streetName}
          houseNumber={props.user.address.houseNumber}
          postalCode={props.user.address.postalCode}
          city={props.user.address.city}
        />
        <Checkout
          items={props.items}
          createTransaction={props.createTransaction}
        />
      </Border>
    </Flex>
  );
};

const ShoppingCardProvider = props => {
  const [items, setItems] = React.useState([
    { name: "desk", price: 4 },
    { name: "chair", price: 9 },
    { name: "lamp", price: 3 }
  ]);

  return (
    <ShoppingCardContext.Provider value={[items, setItems]}>
      {props.children}
    </ShoppingCardContext.Provider>
  );
};

const ShoppingCart = props => {
  return (
    <ShoppingCardProvider>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Cart />
        <Info user={props.user} createTransaction={props.createTransaction} />
      </div>
    </ShoppingCardProvider>
  );
};

const App = () => {
  return (
    <ShoppingCart
      user={{
        address: {
          postalCode: "M1 2WX",
          city: "Manchester",
          streetName: "Baird Street",
          houseNumber: "2A"
        }
      }}
      createTransaction={amount =>
        alert(`Transaction created with amount of ${amount}.`)
      }
    />
  );
};

export default App;
