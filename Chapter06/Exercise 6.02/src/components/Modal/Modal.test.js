import React, { useState } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Modal } from "./index";

afterEach(cleanup);

it("renders modal component", () => {
  const { asFragment } = render(<Modal showModal={true}>Some text</Modal>);
  expect(asFragment()).toMatchSnapshot();
});

it("does not show component when showModal is false", () => {
  const { container } = render(
    <Modal showModal={false}>Text not visible</Modal>
  );
  expect(container.firstChild).toBeNull();
});

const ModalDemo = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Modal
        showModal={showModal}
        toggleModal={() => {
          console.log("clicked");
        }}
      >
        Text not visible
      </Modal>
      <button
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Toggle Modal
      </button>
    </div>
  );
};

it("switches modal when button is clicked", () => {
  const { container, getByText } = render(<ModalDemo />);
  expect(container.querySelector(".modal")).toBeNull();
  fireEvent.click(getByText("Toggle Modal"));
  expect(container.querySelector(".modal")).not.toBeNull();
  fireEvent.click(getByText("Toggle Modal"));
  expect(container.querySelector(".modal")).toBeNull();
});
