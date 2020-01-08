import React from "react";
import ReactDOM from "react-dom";
import UserCountDisplay from "./UserCountDisplay";

import { mount } from "enzyme";

describe(UserCountDisplay, () => {
  const component = mount(<UserCountDisplay />);
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserCountDisplay />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("displays a loading message", () => {
    component.setState({ loadingUserCount: true });
    expect(component.find("p").text()).toEqual("Loading user count...");
  });

  it("displays the count if it is done loading", () => {
    component.setState({ loadingUserCount: false, userCount: 7 });
    expect(component.find("p").text()).toEqual("Users in the app: 7");
  });
});
