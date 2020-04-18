import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
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

  it("by default loads the homepage", () => {
    history.push("/");
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(".Search").length).toEqual(0);
    expect(wrapper.find(".Homepage").length).toEqual(1);
  });

  it("navigates to and displays the search component and executes a search", () => {
    history.push("/search?q=fox");
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(".Search").length).toEqual(1);
    expect(wrapper.find(".Homepage").length).toEqual(0);
    expect(
      wrapper
        .find("li")
        .map(li => li.text())
        .indexOf("A lazy fox")
    ).not.toEqual(-1);
    expect(
      wrapper
        .find("li")
        .map(li => li.text())
        .indexOf("Lorem Ipsum")
    ).toEqual(-1);
  });
});
