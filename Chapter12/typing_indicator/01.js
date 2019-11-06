import React from "react";

const Chat = props => (
  <div>
    <div>welcome user</div>
    message: <input placeholder="type your message..." />
    <button>send</button>
  </div>
);

const Messenger = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Chat />
      <Chat />
    </div>
  );
};

export default Messenger;
