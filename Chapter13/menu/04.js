import React from "react";

const MenuContext = React.createContext();

const Menu = props => {
  return (
    <MenuContext.Provider value={{ activeId: props.value }}>
      {props.children}
    </MenuContext.Provider>
  );
};

const MenuItem = props => {
  const menuContext = React.useContext(MenuContext);

  const handler = () => {
    console.log("item selected", props.children);
  };

  return (
    <div
      tabIndex="0"
      style={{
        textDecoration: menuContext.activeId === props.id ? "underline" : "none"
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
