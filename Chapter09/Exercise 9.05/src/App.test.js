import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from "enzyme";
import { MemoryRouter, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

describe(App, () => {
  describe("With an always present navbar", () => {
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
      expect(wrapper.find(".Navbar").length).toEqual(1);
    });

    describe("For the about routes", () => {
      history.push("/about");
      const wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      it("loads the about section when navigating to about", () => {
        expect(wrapper.find(".About").length).toEqual(1);
        expect(wrapper.find(".Navbar").length).toEqual(1);
      });

      it("navigates to the contact link", () => {
        wrapper
          .find(Link)
          .at(0)
          .simulate("click");
        setTimeout(() => {
          expect(wrapper.find(".About").length).toEqual(1);
          expect(wrapper.find(".Contact").length).toEqual(1);
          expect(wrapper.find(".Bio").length).toEqual(0);
          expect(wrapper.find(".Navbar").length).toEqual(1);
        }, 100);
      });

      it("navigates to the bio link", () => {
        wrapper
          .find(Link)
          .at(1)
          .simulate("click");
        setTimeout(() => {
          expect(wrapper.find(".About").length).toEqual(1);
          expect(wrapper.find(".Contact").length).toEqual(0);
          expect(wrapper.find(".Bio").length).toEqual(1);
          expect(wrapper.find(".Navbar").length).toEqual(1);
        }, 100);
      });
    });

    it("displays a 404 message when navigating to a bad route", () => {
      history.push("/error");
      const wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(".Homepage").length).toEqual(0);
      expect(wrapper.find("h1").text()).toEqual("404 - Component Not Found");
      expect(wrapper.find(".Navbar").length).toEqual(1);
    });
  });
});
