import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount } from "enzyme";

describe(App, () => {
  const component = mount(<App />);
  const value = "Some text";
  component.find("textarea").simulate("change", { target: { value } });
  const submitMock = jest
    .spyOn(App.prototype, "submitForm")
    .mockImplementation(() => {});

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("displays the number of characters entered", () => {
    const fieldLength = component.find("p").text();
    expect(fieldLength).toEqual(`${value.length} character(s)!`);
  });

  it("disables the submit button when the text is under 100 characters", () => {
    expect(component.state("submitDisabled")).toEqual(true);
  });

  it("updates the field state to store the entered text", () => {
    expect(component.state("field")).toEqual(value);
  });

  it("does not submit the button if not enough text has been entered", () => {
    component.find("button").simulate("click");
    expect(submitMock).not.toHaveBeenCalled();
  });

  it("enables the submit button when the input is over 100 characters", () => {
    component.find("textarea").simulate("change", {
      target: {
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis velit vitae elit maximus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis velit vitae elit maximus metus. "
      }
    });
    expect(component.state("submitDisabled")).toEqual(false);
  });

  it("does submit the button if enough text has been entered", () => {
    component.find("textarea").simulate("change", {
      target: {
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis velit vitae elit maximus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis velit vitae elit maximus metus. "
      }
    });
    component.find("button").simulate("click");
    expect(submitMock).toHaveBeenCalled();
  });
});
