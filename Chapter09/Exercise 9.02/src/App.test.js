import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

describe(App, () => {
  const history = createBrowserHistory();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("routes to the homepage by default", () => {
    history.push("/");
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(".Homepage").length).toEqual(1);
  });

  it("routes to about by the about route", () => {
    history.push("/about");
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(".About").length).toEqual(1);
  });

  it("routes to the homepage when inputting bad routes", () => {
    history.push("/error");
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(".Homepage").length).toEqual(1);
  });
});
