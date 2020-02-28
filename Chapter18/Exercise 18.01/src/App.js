import React from "react";
const WithClickHandler = props => {
  const clickProps = {
    onClick: event => {
      console.log("you clicked the", event.target.value);
    }
  };
  const clickableChildren = React.Children.map(props.children, child =>
    React.cloneElement(child, clickProps)
  );

  return clickableChildren;
};
const App = () => {
  return (
    <WithClickHandler>
      <input type="button" value="first Button" />
      <input type="button" value="second Button" />
    </WithClickHandler>
  );
};


