import React from "react";
import ReactDOM from "react-dom";
import UserDisplay from "./UserDisplay";

import { mount } from "enzyme";

describe(UserDisplay, () => {
  const userProp = {
    username: "Test user",
    id: 1
  };
  const component = mount(<UserDisplay user={userProp} />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserDisplay user={userProp} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("includes the username display", () => {
    expect(
      component
        .find("div.UserDisplay")
        .text()
        .indexOf(`Logged in as ${userProp.username}!`)
    ).not.toEqual(-1);
  });

  it("does not render the username if there is no user", () => {
    const empty = mount(<UserDisplay user={null} />);
    expect(empty.text().length).toEqual(0);
  });
});
