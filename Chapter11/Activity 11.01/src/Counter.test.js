import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import { mount } from "enzyme";
import CounterView from "./CounterView";

describe(Counter, () => {
  const wrapper = mount(<Counter />);
  const stateSpy = jest.spyOn(React, "useState");
  const effectSpy = jest.spyOn(React, "useEffect");

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Counter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("includes the CounterView", () => {
    expect(wrapper.find(CounterView).length).toEqual(1);
    expect(stateSpy).toHaveBeenCalled();
    expect(effectSpy).toHaveBeenCalled();
  });
});
