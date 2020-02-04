import React from "react";

const useChatHook = () => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "add_message":
          return {
            ...state,
            messages: [...state.messages, action.message]
          };
        case "clear_messages":
          return {
            ...state,
            messages: []
          };
        case "join":
          return {
            ...state,
            isInChat: true
          };
        case "quit":
          return {
            ...state,
            isInChat: false
          };
        default:
          return state;
      }
    },
    {
      messages: [],
      isInChat: false
    }
  );
  return { state, dispatch };
};

export { useChatHook };
