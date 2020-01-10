import React from "react";
import ReactDOM from "react-dom";
import CounterView from "./CounterView";
import { mount } from "enzyme";
import expectExport from "expect";

describe(CounterView, () => {
  const incMock = jest.fn(() => {});
  const decMock = jest.fn(() => {});
  const resetMock = jest.fn(() => {});
  const value = 5;

  const wrapper = mount(
    <CounterView
      value={value}
      increment={incMock}
      decrement={decMock}
      reset={resetMock}
    />
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CounterView
        value={value}
        increment={incMock}
        decrement={decMock}
        reset={resetMock}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("clicks the increment button", () => {
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expectExport(incMock).toHaveBeenCalledTimes(1);
  });

  it("clicks the decrement button", () => {
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expectExport(decMock).toHaveBeenCalledTimes(1);
  });

  it("clicks the reset button", () => {
    wrapper
      .find("button")
      .at(2)
      .simulate("click");
    expectExport(resetMock).toHaveBeenCalledTimes(1);
  });

  it("includes the value", () => {
    const valueText = wrapper
      .find("div")
      .at(1)
      .text();
    expectExport(valueText).toEqual(`The current value is: ${value}`);
  });
});
