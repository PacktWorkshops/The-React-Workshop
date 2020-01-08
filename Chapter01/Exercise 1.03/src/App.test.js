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

  it("greets the user", () => {
    expect(
      component
        .find("p")
        .at(0)
        .text()
    ).toEqual("Hello User!");
  });

  it("displays the click count", () => {
    expect(
      component
        .find("p")
        .at(1)
        .text()
    ).toEqual("I've been clicked 0 times!");
  });

  it("displays the click count", () => {
    const count = component.state("clickCounter");
    expect(
      component
        .find("p")
        .at(1)
        .text()
    ).toEqual(`I've been clicked ${count} times!`);
  });
});
