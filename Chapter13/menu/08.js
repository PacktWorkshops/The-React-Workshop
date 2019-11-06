import React from "react";

const MenuContext = React.createContext();

const Menu = props => {
  const isControlled = React.useRef(!!props.value);

  React.useEffect(() => {
    if (isControlled.current !== !!props.value) {
      alert(
        "<Menu /> changed from controlled to uncontrolled or the other way during the same lifecycle."
      );
    }
  }, [props.value]);

  const [state, setState] = React.useState(undefined);

  let activeId = state,
    setActiveId = setState;

  if (isControlled.current) {
    activeId = props.value;
    setActiveId = props.onChange;
  }

  return (
    <MenuContext.Provider value={{ activeId, setActiveId }}>
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
