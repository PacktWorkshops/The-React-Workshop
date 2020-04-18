import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

import { mount } from "enzyme";

describe(Message, () => {
  const message = "Test Message";
  const removeItemMock = jest.fn(() => {});
  const component = mount(
    <Message message={message} removeItem={removeItemMock} />
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Message message={message} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the message", () => {
    expect(component.find("p").text()).toEqual(message);
  });

  it("calls the removeItem prop when the button is clicked", () => {
    component.find("button").simulate("click");
    expect(removeItemMock).toHaveBeenCalled();
  });
});
