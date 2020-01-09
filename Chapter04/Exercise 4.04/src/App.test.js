import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount } from "enzyme";

describe(App, () => {
  const component = mount(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("starts with an empty state and is loading", () => {
    expect(component.state("messages").length).toEqual(0);
    expect(component.state("loading")).toEqual(true);
    expect(
      component
        .find("div")
        .at(1)
        .text()
    ).toEqual("Loading...");
  });

  it("loads the rest of the messages after 10 seconds", () => {
    setTimeout(() => {
      expect(component.state("messages").length > 0).toEqual(true);
      expect(component.state("loading")).toEqual(false);
      const messages = component.state("messages");
      component.find("li").forEach(li => {
        expect(messages.indexOf(li.text())).not.toEqual(-1);
      });
    }, 10000);
  });

  it("displays a no message error if there are no messages and it is not loading", () => {
    component.setState({ messages: [], loading: false });
    expect(
      component
        .find("div")
        .at(1)
        .text()
    ).toEqual("No messages!");
  });
});
