import React from "react";

const Chat = props => {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <div>welcome {props.user.name}</div>
      message:{" "}
      <input
        onChange={e => setValue(e.target.value)}
        placeholder="type your message..."
        value={value}
      />
      <button>send</button>
    </div>
  );
};

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
      <Chat
        user={state.users.find(user => user.name === "Jane")}
        participant={state.users.find(user => user.name === "Joe")}
        messages={state.messages}
        dispatch={dispatch}
      />
      <Chat
        user={state.users.find(user => user.name === "Joe")}
        participant={state.users.find(user => user.name === "Jane")}
        messages={state.messages}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Messenger;
