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

  it("displays all of the inventory items", () => {
    const items = component.state("items");
    items.forEach((item, index) => {
      const domItem = component.find(".InventoryItem").at(index);
      expect(domItem.find("strong").text()).toEqual(item.itemName);
      expect(domItem.find("p").text()).toEqual(item.itemPrice.toString());
    });
  });
});
