import React from "react";

const Child = () => {
  const [counter, setCounter] = React.useState(0);
  const mounted = React.useRef(true);

  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div>
      Child: {counter}
      <button onClick={() => setCounter(x => x + 1)}>
        increment instantly
      </button>
      <button
        onClick={() => {
          console.log(mounted);
          setTimeout(() => {
            console.log(mounted);
            if (mounted.current) {
              setCounter(x => x + 1);
            }
          }, 3000);
        }}
      >
        increment after 3 seconds
      </button>
    </div>
  );
};

const Parent = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      Parent
      <button onClick={() => setVisible(false)}>toggle</button>
      {visible && <Child />}
    </>
  );
};

export default Parent