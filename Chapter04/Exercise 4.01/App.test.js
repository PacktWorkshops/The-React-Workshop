import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount } from "enzyme";

describe(App, () => {
  const componentDidUpdateSpy = jest.spyOn(App.prototype, "componentDidUpdate");
  const component = mount(<App />);
  component.instance().forceUpdate();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("executed the componentDidUpdate lifecycle method", () => {
    expect(componentDidUpdateSpy).toHaveBeenCalled();
  });

  it("starts with a cycle in the state", () => {
    expect(component.state("cycle")).not.toEqual(null);
  });

  it("updates the cycle number periodically", () => {
    const start = component.state("cycle");
    setTimeout(() => {
      const end = component.state("cycle");
      expect(end > start).toEqual(true);
    }, 1000);
  });
});
