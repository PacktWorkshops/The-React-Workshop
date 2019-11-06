import React from "react";

const Comp = props => {
  React.useEffect(() => {
    console.log("name prop changed");
  }, [props.name]);

  React.useEffect(() => {
    localStorage.setItem("age", props.age);
  }, [props.age]);

  return <div>{props.name}</div>;
};

export default Comp;
