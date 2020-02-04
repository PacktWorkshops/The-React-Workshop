import React from "react";

import { AuthContext } from "./AuthService";
import Address from "./Address";

const Settings = () => {
  const user = React.useContext(AuthContext);

  return (
    <div style={{ marginTop: 24, textAlign: "center" }}>
      <h1>User Settings</h1>
      <h2>Addresses</h2>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 16
        }}
      >
        {user
          ? user.addresses.map((addr, index) => (
              <Address key={`address-${index}`} {...addr} />
            ))
          : "loading..."}
      </div>
    </div>
  );
};

export default Settings;
