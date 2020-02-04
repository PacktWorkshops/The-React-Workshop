import React from "react";

import { useChatHook } from "./ChatHooks";
import ChatService from "./ChatService";

const ChatWindow = props => {
  const { state, dispatch } = useChatHook();
  const clearMessages = () => dispatch({ type: "clear_messages" });

  React.useEffect(() => {
    const chatService = new ChatService();
    chatService.subscribe(message =>
      dispatch({ type: "add_message", message })
    );

    return () => {
      chatService.unsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      Chat Service is running...
      <br />
      <strong>Messages</strong>
      <hr />
      <ul>
        {state.messages.map((msg, index) => (
          <li key={`m-${index}`}>{msg}</li>
        ))}
      </ul>
      <hr />
      <button onClick={props.close}>Close Down</button>
      <button onClick={clearMessages}>Clear Messages</button>
    </div>
  );
};

export default ChatWindow;
