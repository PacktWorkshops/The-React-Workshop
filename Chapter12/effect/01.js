/* eslint-disable */
import React from "react";

const Component = props => {
  const fn = e => console.log(props);

  React.useEffect(() => {
    document.addEventListener("keydown", fn);

    return () => {
      document.removeEventListener("keydown", fn);
    };
  }, []);

  return null;
};

export default Component;
