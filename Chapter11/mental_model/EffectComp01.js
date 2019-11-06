import React from "react";

const Comp = props => {
  React.useEffect(() => {
    console.log("name prop changed");
  }, [props.name]);

  return <div>{props.name}</div>;
};

export default Comp;
