import React from "react";
import ReactDOM from "react-dom";
import Address from "./Address";

import { shallow } from "enzyme";

describe(Address, () => {
  const city = "Fake City";
  const postalCode = "12345";
  const houseNumber = "5";
  const streetName = "Fake Street";
  const props = { city, postalCode, houseNumber, streetName };
  const component = shallow(<Address {...props} />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Address {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("includes all address fields on render", () => {
    const fields = [postalCode, city, houseNumber, streetName];
    fields.forEach(field =>
      expect(component.text().indexOf(field)).not.toEqual(-1)
    );
  });
});
