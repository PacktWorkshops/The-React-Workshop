import React from "react";
import ReactDOM from "react-dom";
import MessageDisplay from "./MessageDisplay";

import { mount } from "enzyme";

jest.useFakeTimers();

describe(MessageDisplay, () => {
  const userId = 1;
  const component = mount(<MessageDisplay userId={userId} />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MessageDisplay userId={userId} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders all of the messages", () => {
    component.setState({ loadingMessages: false, messages: ["One", "Two"] });
    expect(component.find("li").length).toEqual(2);
    expect(component.find("p").length).toEqual(0);
  });

  it("renders the loading message", () => {
    component.setState({ loadingMessages: true, messages: [] });
    expect(component.find("p").text()).toEqual("Messages still loading...");
  });

  it("renders the no messages message", () => {
    component.setState({ loadingMessages: false, messages: [] });
    expect(component.find("p").text()).toEqual("No messages for you!");
  });
});
