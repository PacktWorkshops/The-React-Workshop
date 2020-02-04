import React from "react";
import ReactDOM from "react-dom";
import Settings from "./Settings";
import Address from "./Address";
import { mount } from "enzyme";

const city = "Fake City";
const postalCode = "12345";
const houseNumber = "5";
const streetName = "Fake Street";
const props = { city, postalCode, houseNumber, streetName };

const mockUser = {
  addresses: [props]
};
const mockUseContext = jest.fn(() => mockUser);

React.useContext = mockUseContext;

describe(Settings, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Settings />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the mock user via useContext", () => {
    const before = mockUseContext.mock.calls.length;
    const component = mount(<Settings />);
    const after = mockUseContext.mock.calls.length;
    Object.keys(props).forEach(field => {
      expect(component.text().indexOf(props[field])).not.toEqual(-1);
    });
    expect(before < after).toEqual(true);
  });

  it("includes the Address component", () => {
    const component = mount(<Settings />);
    expect(component.find(Address).length > 0).toEqual(true);
  });
});
