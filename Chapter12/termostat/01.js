import React from "react";

const Termostat = () => {
  const [temperature, setTemperature] = React.useState(20);

  return (
    <>
      <div>current temperature is {temperature}</div>
      <button onClick={() => setTemperature(prev => prev + 1)}>
        increase temperature
      </button>
      <button onClick={() => setTemperature(prev => prev - 1)}>
        decrease temperature
      </button>
    </>
  );
};

export default Termostat;
