import React from "react";

const Address = props => {
  return (
    <div className="Address">
      <div>{`${props.city}, ${props.postalCode}`}</div>
      <div>{`${props.houseNumber}, ${props.streetName}`}</div>
    </div>
  );
};

export default Address;
