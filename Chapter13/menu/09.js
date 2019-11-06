import React from "react";

const MenuContext = React.createContext();

const Menu = props => {
  const isControlled = React.useRef(!!props.value);

  const initialSet = React.useRef(false);

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

  const setDefault = React.useCallback(id => {
    if (!initialSet.current && !isControlled.current) {
      initialSet.current = true;
      setState(id);
    }
  }, []);

  return (
    <MenuContext.Provider
      value={{
        activeId,
        setActiveId,
        setDefault
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

const MenuItem = props => {
  const { activeId, setActiveId, setDefault } = React.useContext(MenuContext);

  const handler = React.useCallback(() => {
    setActiveId(props.id);
  }, [props.id, setActiveId]);

  React.useEffect(() => setDefault(props.id), [setDefault, props.id]);

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
