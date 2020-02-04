import React from "react";
import ReactDOM from "react-dom";

import { mount } from "enzyme";

import ChatWindow from "./ChatWindow";

const mockDispatch = jest.fn();
const mockSubscribe = jest.fn();
const mockUnsubscribe = jest.fn();

jest.mock("./ChatHooks", () => {
  const mockUseChatHook = () => {
    return {
      state: { messages: ["foo", "bar"] },
      dispatch: mockDispatch
    };
  };

  return { useChatHook: mockUseChatHook };
});

jest.mock("./ChatService", () => {
  class MockChatService {
    subscribe = mockSubscribe;
    unsubscribe = mockUnsubscribe;
  }
  return MockChatService;
});

describe(ChatWindow, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ChatWindow />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("With a mocked ChatHook", () => {
    const mockClose = jest.fn();
    it("displays messages when the state has messages", () => {
      const component = mount(<ChatWindow />);
      expect(component.find("ul > li").length).toEqual(2);
    });

    it("calls the passed in close function when the Close Down button is clicked", () => {
      const component = mount(<ChatWindow close={mockClose} />);
      component
        .find("button")
        .at(0)
        .simulate("click");
      expect(mockClose).toHaveBeenCalled();
    });

    it("calls a dispatch when clear messages is clicked", () => {
      const component = mount(<ChatWindow close={mockClose} />);
      const before = mockDispatch.mock.calls.length;
      component
        .find("button")
        .at(1)
        .simulate("click");
      const after = mockDispatch.mock.calls.length;
      expect(before < after).toEqual(true);
    });

    it("subscribes to a chat service when the component mounts", () => {
      const before = mockSubscribe.mock.calls.length;
      const component = mount(<ChatWindow close={mockClose} />);
      const after = mockSubscribe.mock.calls.length;
      expect(before < after).toEqual(true);
    });

    it("unsubscribes to a chat service when the component unmounts", () => {
      const before = mockUnsubscribe.mock.calls.length;
      let component = mount(<ChatWindow close={mockClose} />);
      component.unmount();
      const after = mockUnsubscribe.mock.calls.length;

      expect(before < after).toEqual(true);
    });
  });
});
