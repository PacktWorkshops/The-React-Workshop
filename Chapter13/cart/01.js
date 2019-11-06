import React from "react";

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

const Item = props => (
  <div style={{ padding: 5, display: "flex", justifyContent: "space-between" }}>
    {`${props.name}:  £${props.price}`}
    <button onClick={() => alert(`Item ${props.name} should be deleted.`)}>
      delete item
    </button>
  </div>
);

const Cart = props => {
  return (
    <Flex>
      <Border>
        {props.items.map(item => {
          return <Item key={item.name} name={item.name} price={item.price} />;
        })}
      </Border>
    </Flex>
  );
};

const Checkout = props => {
  const totalPrice = props.items.reduce((sum, item) => sum + item.price, 0);

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

const ShoppingCart = props => {
  const items = [
    { name: "desk", price: 4 },
    { name: "chair", price: 9 },
    { name: "lamp", price: 3 }
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Cart items={items} />
      <Info
        items={items}
        user={props.user}
        createTransaction={props.createTransaction}
      />
    </div>
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
