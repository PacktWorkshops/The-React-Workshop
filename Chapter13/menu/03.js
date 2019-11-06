import React from "react";

const Menu = props =>
  React.Children.map(props.children, child => {
    return React.cloneElement(child, { activeId: props.value });
  });

const MenuItem = props => {
  const handler = () => {
    console.log("item selected", props.children);
  };

  return (
    <div
      tabIndex="0"
      style={{
        textDecoration: props.activeId === props.id ? "underline" : "none"
      }}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          handler();
        }
      }}
      onClick={() => {
        handler();
      }}
    >
      {props.children}
    </div>
  );
};

export { Menu, MenuItem };
