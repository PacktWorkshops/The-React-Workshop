import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from "enzyme";

describe(App, () => {
  const stateSpy = jest.spyOn(React, "useState");
  const effectSpy = jest.spyOn(React, "useEffect");
  const wrapper = mount(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("starts not logged in", () => {
    expect(
      wrapper
        .find("p")
        .at(0)
        .text()
    ).toEqual("Logged Out");
  });

  it("logs you in when you click the button", () => {
    wrapper.find("button").simulate("click");
    expect(
      wrapper
        .find("p")
        .at(0)
        .text()
    ).toEqual("Welcome Back!");
    expect(localStorage.getItem("loggedIn")).toEqual("true");
    expect(wrapper.find("button").text()).toEqual("Log Out");
    expect(effectSpy).toHaveBeenCalled();
    expect(stateSpy).toHaveBeenCalled();
  });
});
