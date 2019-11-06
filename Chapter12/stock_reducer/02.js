import React from "react";

// import React from "react";

const STORAGE_LIMIT = 10;

const Row = React.memo(props => {
  console.log("props");

  return (
    <div>
      {props.name} {props.weight}kg x {props.quantity}{" "}
      <button onClick={props.increase}>increase quantity</button>
    </div>
  );
});

const Stock = () => {
  const [state, dispatch] = React.useReducer(
    prevState => {
      return prevState;
    },
    {
      storageLimit: STORAGE_LIMIT,
      stock: [
        {
          product_name: "milk",
          weight: 1,
          quantity: 1
        },
        {
          product_name: "steak",
          weight: 3,
          quantity: 3
        }
      ]
    }
  );

  return (
    <>
      <div>{state.storageLimit}</div>

      <button
        onClick={() => {
          dispatch({
            type: "add_item",
            payload: {
              product_name: "lettuce",
              weight: 1,
              quantity: 3
            }
          });
        }}
      >
        add item
      </button>
      {state.stock.map(item => {
        return (
          <Row
            key={item.product_name}
            name={item.product_name}
            weight={item.weight}
            quantity={item.quantity}
            increase={() => null}
          />
        );
      })}
    </>
  );
};

export default Stock;
