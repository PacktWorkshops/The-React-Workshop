import React from "react";

const Comp = props => {
  React.useEffect(() => {
    console.log("name prop changed");
  }, [props.name]);

  React.useEffect(() => {
    localStorage.setItem("age", props.age);

    return () => {
      localStorage.removeItem("age");
    };
  }, [props.age]);

  return <div>{props.name}</div>;
};

export default Comp;
