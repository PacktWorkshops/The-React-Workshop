import React from "react";

const Termostat = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      if (action.type === "inc") {
        return { temperature: prevState.temperature + 1 };
      }

      if (action.type === "dec") {
        return { temperature: prevState.temperature - 1 };
      }

      return prevState;
    },
    { temperature: 20 }
  );

  return (
    <>
      <div>current temperature is {state.temperature}</div>
      <button onClick={() => dispatch({ type: "inc" })}>
        increase temperature
      </button>
      <button onClick={() => dispatch({ type: "dec" })}>
        decrease temperature
      </button>
    </>
  );
};

export default Termostat;
