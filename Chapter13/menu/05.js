import React from "react";

const MenuContext = React.createContext();

const Menu = props => {
  return (
    <MenuContext.Provider
      value={{ activeId: props.value, setActiveId: props.onChange }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

const MenuItem = props => {
  const { activeId, setActiveId } = React.useContext(MenuContext);

  const handler = React.useCallback(() => {
    setActiveId(props.id);
  }, [props.id, setActiveId]);

  return (
    <div
      tabIndex="0"
      style={{
        textDecoration: activeId === props.id ? "underline" : "none"
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
