import React from "react";
import ReactDOM from "react-dom";
import App, { RouteTo, About } from "./App";

import { mount } from "enzyme";

const navigateTo = path => {
  delete global.window.location;
  global.window = Object.create(window);
  global.window.location = {
    href: `http://localhost:3000/${path}`,
    pathname: `/${path}`
  };
};

describe(App, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("routes to the Default component when not specifying a path", () => {
    const component = mount(<App />);
    expect(component.find(".Default").length > 0).toEqual(true);
  });

  it("routes to the About component when visiting /about", () => {
    navigateTo("about");
    const component = mount(<App />);
    expect(component.find(".About").length > 0).toEqual(true);
  });

  it("routes to the Default component when specifying the wrong path", () => {
    navigateTo("wrong");
    const component = mount(<App />);
    expect(component.find(".Default").length > 0).toEqual(true);
  });
});
