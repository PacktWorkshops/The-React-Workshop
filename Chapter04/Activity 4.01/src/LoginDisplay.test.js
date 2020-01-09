import React from "react";
import ReactDOM from "react-dom";
import LoginDisplay from "./LoginDisplay";

import { mount } from "enzyme";

describe(LoginDisplay, () => {
  const component = mount(<LoginDisplay />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginDisplay />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("displays a loading message if it is loading", () => {
    component.setState({ loadingLogin: true });
    expect(
      component.text().indexOf("Trying to login, please wait...")
    ).not.toEqual(-1);
    expect(component.find(".UserDisplay").length).toEqual(0);
  });

  it("displays the loading form message if it is not loading and has no user", () => {
    component.setState({ loadingLogin: false, user: null });
    expect(component.text().indexOf("Login Username:")).not.toEqual(-1);
    expect(component.find(".UserDisplay").length).toEqual(0);
  });

  it("displays the user display if it is not loading and has a user", () => {
    component.setState({
      loadingLogin: false,
      user: { id: 1, username: "Steve" }
    });
    expect(component.find("button").text()).toEqual("Logout");
    expect(component.find(".UserDisplay").length).not.toEqual(0);
  });
});
