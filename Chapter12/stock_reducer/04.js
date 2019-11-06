import React from "react";

// import React from "react";

const STORAGE_LIMIT = 10;

const Row = React.memo(props => {
  console.log("Row rerendered: " + props.name);

  return (
    <div>
      {props.name} {props.weight}kg x {props.quantity}{" "}
      <button
        onClick={() =>
          props.dispatch({
            type: "increase_quantity",
            payload: { product_name: props.name }
          })
        }
      >
        increase quantity
      </button>
    </div>
  );
});

const Stock = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "add_item":
          const index = prevState.stock.findIndex(
            item => item.product_name === action.payload.product_name
          );

          if (
            prevState.storageLimit -
              action.payload.weight * action.payload.quantity >=
              0 &&
            index === -1
          ) {
            return {
              storageLimit:
                prevState.storageLimit -
                action.payload.weight * action.payload.quantity,
              stock: [...prevState.stock, { ...action.payload }]
            };
          } else {
            return prevState;
          }

        default:
          return prevState;
      }
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
            dispatch={dispatch}
          />
        );
      })}
    </>
  );
};

export default Stock;
