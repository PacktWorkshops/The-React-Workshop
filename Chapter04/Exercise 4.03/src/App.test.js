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

  it("shows loading if it is loading", () => {
    component.setState({ loading: true });
    expect(component.text().indexOf("Loading...")).not.toEqual(-1);
  });

  it("shows no messages if it is not loading and there are no messages", () => {
    component.setState({ loading: false, messages: [] });
    expect(component.text().indexOf("No messages!")).not.toEqual(-1);
  });

  it("shows messages if it is not loading and there are messages", () => {
    component.setState({ loading: false, messages: ["Foobar"] });
    expect(component.text().indexOf("Foobar")).not.toEqual(-1);
  });
});
