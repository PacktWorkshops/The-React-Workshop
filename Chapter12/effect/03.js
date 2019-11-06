import React from "react";

const Component = props => {
  const fn = React.useCallback(() => {
    console.log(props.age, props.name);
  }, [props.age, props.name]);

  React.useEffect(() => {
    document.addEventListener("keydown", fn);

    return () => {
      document.removeEventListener("keydown", fn);
    };
  }, [fn]);

  return null;
};

export default Component;
