import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount } from "enzyme";

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
  const alertMock = jest.fn();
  window.alert = alertMock;

  const component = mount(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("includes the total price from the Pay component", () => {
    const text = component.text();
    expect(text.indexOf("Total price")).not.toEqual(-1);
  });

  it("includes the three items in the cart", () => {
    const text = component.text();
    expect(text.indexOf("desk")).not.toEqual(-1);
    expect(text.indexOf("chair")).not.toEqual(-1);
    expect(text.indexOf("lamp")).not.toEqual(-1);
  });

  it("removes items from the cart", () => {
    const text = component.text();
    expect(text.indexOf("desk")).not.toEqual(-1);
    expect(text.indexOf("chair")).not.toEqual(-1);
    expect(text.indexOf("lamp")).not.toEqual(-1);
    component
      .find("button")
      .at(1)
      .simulate("click");
    component
      .find("button")
      .at(1)
      .simulate("click");
    component
      .find("button")
      .at(1)
      .simulate("click");
    expect(component.text().indexOf("desk")).toEqual(-1);
    expect(component.text().indexOf("chair")).toEqual(-1);
    expect(component.text().indexOf("lamp")).toEqual(-1);
  });

  it("sets a total price of 0 when all items have been removed", () => {
    const cartTotal = component
      .find("div")
      .at(2)
      .text();
    expect(cartTotal.indexOf("Total price £0")).not.toEqual(-1);
  });

  it("with a fresh component, when pay now is clicked, all items in the cart disappear", () => {
    const alertMock = jest.fn();
    window.alert = alertMock;
    const fresh = mount(<App />);
    const text = fresh.text();
    expect(text.indexOf("desk")).not.toEqual(-1);
    expect(text.indexOf("chair")).not.toEqual(-1);
    expect(text.indexOf("lamp")).not.toEqual(-1);
    fresh
      .find("button")
      .at(3)
      .simulate("click");
    expect(fresh.text().indexOf("desk")).toEqual(-1);
    expect(fresh.text().indexOf("chair")).toEqual(-1);
    expect(fresh.text().indexOf("lamp")).toEqual(-1);
    expect(alertMock).toHaveBeenCalled();
  });
});
