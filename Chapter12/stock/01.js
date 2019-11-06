import React from "react";

const Row = React.memo(props => {
  return (
    <div>
      {props.name} {props.weight}kg x {props.quantity}{" "}
      <button>increase quantity</button>
    </div>
  );
});

const Stock = () => {
  const [stock, setStock] = React.useState([
    {
      product_name: "milk",
      weight: 1.2,
      quantity: 1
    },
    {
      product_name: "steak",
      weight: 3.4,
      quantity: 3
    }
  ]);

  return (
    <>
      <button
        onClick={() => {
          setStock([]);
        }}
      >
        clear
      </button>
      <button
        onClick={() => {
          const newItem = {
            product_name: "lettuce",
            weight: 0.4,
            quantity: 3
          };

          setStock(prevStock => {
            return [...prevStock, newItem];
          });
        }}
      >
        add item
      </button>
      {stock.map(item => {
        return (
          <Row
            key={item.product_name}
            name={item.product_name}
            weight={item.weight}
            quantity={item.quantity}
          />
        );
      })}
    </>
  );
};

export default Stock;
