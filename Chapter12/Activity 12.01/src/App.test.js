import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount } from "enzyme";

import ChatWindow from "./ChatWindow";

// jest.mock("./ChatHooks", () => ({
//   useChatHook: () => ({
//     state: {
//       isInChat: false,
//       messages: []
//     },
//     dispatch: () => {

//     }
//   })
// }));

describe(App, () => {
  const component = mount(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("adds a chat window when the button is clicked", () => {
    const before = component.find(ChatWindow).length;
    component.find("button").simulate("click");
    const after = component.find(ChatWindow).length;

    expect(before < after).toEqual(true);
  });
});
