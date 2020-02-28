import React from "react";

export const StyledButton = React.forwardRef((props, forwardedRef) => {
  return (
    <button
      ref={forwardedRef}
      style={{ backgroundColor: "grey", color: "white", height: 50 }}
    >
      {props.children}
    </button>
  );
});

const App = () => {
  const buttonRef = React.useRef();

  React.useEffect(() => {
    console.log(buttonRef.current.getBoundingClientRect());
  });

  return <StyledButton ref={buttonRef}>This is the button text</StyledButton>;
};

export default App;
