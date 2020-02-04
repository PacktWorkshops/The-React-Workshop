import React from "react";
import "./App.css";

import ChatWindow from "./ChatWindow";
import { useChatHook } from "./ChatHooks";

const App = () => {
  const { state, dispatch } = useChatHook();
  const quit = () => dispatch({ type: "quit" });
  const join = () => dispatch({ type: "join" });
  return (
    <div className="App">
      <button onClick={join}>Add Chat Window</button>
      {state.isInChat && <ChatWindow close={quit} />}
    </div>
  );
};

export default App;
