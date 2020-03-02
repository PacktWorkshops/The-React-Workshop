import React from "react";

export const FocusableInput = React.forwardRef((props, forwardedRef) => {
  return (
    <input ref={forwardedRef} type="text" placeholder={props.placeholder} />
  );
});

const FocusableForm = props => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (props.autoFocus) {
      inputRef.current.focus();
    }
  });

  return (
    <form>
      <FocusableInput ref={inputRef} placeholder="firstname" />
      <FocusableInput placeholder="lastname" />
      <FocusableInput placeholder="email" />
    </form>
  );
};

class App extends React.Component {
  render() {
    return <FocusableForm autoFocus={true} />;
  }
}

export default App;
