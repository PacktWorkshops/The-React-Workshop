import React from "react";

const Menu = props => props.children;

const MenuItem = props => {
  const handler = () => {
    console.log("item selected", props.children);
  };

  return (
    <div
      tabIndex="0"
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
