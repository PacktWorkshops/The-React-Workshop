import React from "react";

const useNameLogging = name => {
  React.useEffect(() => {
    console.log("name prop changed");
  }, [name]);
};

const useAgeLocalStorage = age => {
  React.useEffect(() => {
    localStorage.setItem("age", age);

    return () => {
      localStorage.removeItem("age");
    };
  }, [age]);
};

const Comp = props => {
  useNameLogging(props.name);
  useAgeLocalStorage(props.age);

  return (
    <div>
      {props.name} is {props.age} old
    </div>
  );
};

export default Comp;
