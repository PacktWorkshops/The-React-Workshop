import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from "enzyme";
import { BrowserRouter as MemoryRouter, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

describe(App, () => {
  const history = createBrowserHistory();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Starting navigation", () => {
    history.push("/");

    it("by default loads the homepage", () => {
      const wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      expect(
        wrapper
          .find("h1")
          .at(1)
          .text()
      ).toEqual("Welcome to my app!");
    });

    it("navigates to the store", () => {
      history.push("/store");
      const wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      expect(wrapper.find("h2").text()).toEqual("Items for Sale");
      expect(wrapper.find(".Item").length > 0).toEqual(true);
    });

    it("navigates to an item", () => {
      history.push("/store/items/1");
      const wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      expect(
        wrapper
          .find(".Item")
          .find("p")
          .at(0)
          .text()
      ).toEqual("id: 1");

      expect(
        wrapper
          .find(".Item")
          .find("p")
          .at(1)
          .text()
      ).toEqual("name: Shoes");

      expect(
        wrapper
          .find(".Item")
          .find("p")
          .at(2)
          .text()
      ).toEqual("description: Some shoes you can buy");
    });

    it("navigates to a non-existing item", () => {
      history.push("/store/items/error");
      const wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(".ItemNotFound").length).toEqual(1);
    });

    it("displays a 404 message when navigating to a bad route", () => {
      history.push("/error");
      const wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find("h2").text()).toEqual(
        "We're sorry, we couldn't find that page!"
      );
    });
  });
});
