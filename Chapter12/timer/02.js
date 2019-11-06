import React from "react";

const Timer = () => {
  const [time, setTime] = React.useState(0);
  const [isRunning, setRunning] = React.useState(false);

  let title = "start";

  if (time !== 0 && !isRunning) {
    title = "resume";
  }

  if (time !== 0 && isRunning) {
    title = "pause";
  }

  return (
    <>
      <div>elapsed time is {time}</div>
      <button>{title}</button>
      <button>reset</button>
    </>
  );
};

export default Timer;
