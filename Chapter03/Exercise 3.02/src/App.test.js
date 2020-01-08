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

  it("displays the first question", () => {
    const questions = component.state("questions");
    const text = component.find(".question-display > .question").text();
    expect(questions[0].question).toEqual(text);
  });

  it("updates the quiz state when we answer a question", () => {
    const question = component.state("questions")[0];
    const buttons = component.find(".question-display > .question-choice");
    buttons.forEach(b => {
      if (b.text() != question.rightAnswer) {
        // Wrong answer
        b.simulate("click");
        expect(component.state("questions")[0].playerChoice).toEqual(b.text());
        expect(component.state("playerScore")).toEqual(0);
        expect(component.find("p.result-correct").length).toEqual(0);
        expect(component.find("p.result-incorrect").length).toEqual(1);
        expect(component.find(".question-display").length).toEqual(1);
      } else {
        // Right answer
        b.simulate("click");
        expect(component.state("questions")[0].playerChoice).toEqual(b.text());
        expect(component.state("playerScore")).toEqual(1);
        expect(component.find("p.result-correct").length).toEqual(1);
        expect(component.find("p.result-incorrect").length).toEqual(0);
        expect(component.find(".question-display").length).toEqual(2);
      }
    });
  });
});
