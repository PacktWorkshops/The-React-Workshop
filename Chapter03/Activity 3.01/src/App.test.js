import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { mount } from "enzyme";

describe(App, () => {
  const flipAllBackOverSpy = jest.spyOn(App.prototype, "flipAllBackOver");
  const resetTilesSpy = jest.spyOn(App.prototype, "resetTiles");

  const component = mount(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("tracks the number of clicks", () => {
    const clicks = component.state("clicks");
    expect(component.find("strong").text()).toEqual(`Clicks: ${clicks}`);
  });

  it("starts the game when the new game button is clicked", () => {
    component.find("button").simulate("click");
    expect(component.state("tiles").length).not.toEqual(0);
    expect(resetTilesSpy).toHaveBeenCalled();
  });

  it("sets the last tile flipped when we click on a tile", () => {
    component.instance().forceUpdate();
    component
      .find(".Tile")
      .at(0)
      .simulate("click");
    expect(component.state("lastFlipped")).not.toEqual(null);
    expect(component.state("clicks")).toEqual(1);
  });

  it("resets tiles flipped when we click on a second tile", () => {
    component.instance().forceUpdate();
    component
      .find(".Tile")
      .at(1)
      .simulate("click");
    expect(component.state("lastFlipped")).toEqual(null);
    expect(component.state("clicks")).toEqual(2);
    expect(flipAllBackOverSpy).toHaveBeenCalled();
  });

  it("calls renderTile for each tile", () => {
    const tiles = component.state("tiles");
    const spy = jest.spyOn(App.prototype, "renderTile");
    component.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(tiles.length);
    spy.mockRestore();
  });
});
