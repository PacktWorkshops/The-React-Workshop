import React from "react";

const Chat = props => (
  <div>
    <div>welcome user</div>
    message: <input placeholder="type your message..." />
    <button>send</button>
  </div>
);

const Messenger = () => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "create_message":
          return {
            ...state,
            messages: [
              ...state.messages,
              {
                user: action.payload.user,
                text: action.payload.message,
                id: state.nextId
              }
            ],
            nextId: state.nextId + 1
          };

        case "set_typing":
          return {
            ...state,
            users: state.users.map(user => {
              if (user.name === action.payload.name) {
                return {
                  name: user.name,
                  typing: action.payload.typing
                };
              }

              return user;
            })
          };

        default:
          return state;
      }
    },
    {
      nextId: 0,
      messages: [],
      users: [{ name: "Jane", typing: false }, { name: "Joe", typing: false }]
    }
  );

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Chat />
      <Chat />
    </div>
  );
};

export default Messenger;
