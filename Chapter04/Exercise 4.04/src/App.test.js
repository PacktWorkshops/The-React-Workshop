import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount } from "enzyme";

describe(App, () => {
  const removeItemSpy = jest.spyOn(App.prototype, "removeItem");
  const component = mount(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("includes all of the messages", () => {
    const messages = component.state("list").map(m => m.message);
    component.find(".Message").forEach(msg => {
      const text = msg.find("p").text();
      expect(messages.indexOf(text)).not.toEqual(-1);
    });
  });

  it("removes messages too", () => {
    const spy = jest.spyOn(App.prototype, "removeItem");
    const countBefore = component.state("list").length;
    component
      .find(".Message")
      .first()
      .find("button")
      .simulate("click");
    const countAfter = component.state("list").length;
    expect(removeItemSpy).toHaveBeenCalled();
    expect(countAfter < countBefore).toEqual(true);
  });
});
