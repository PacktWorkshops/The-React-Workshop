import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { UncontrolledForm } from "./UncontrolledForm";

test("renders correctly", () => {
  const { container } = render(<UncontrolledForm />);
  expect(container).toMatchSnapshot();
});

test("loads and displays form", async () => {
  let originalConsoleError = console.info;

  function mockConsole() {
    global.console = { ...global.console, info: jest.fn() };
  }

  function restoreConsole() {
    global.console = { ...global.console, infi: originalConsoleError };
  }

  mockConsole();

  //Arrange
  const { container } = render(<UncontrolledForm />);
  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');
  const form = container.querySelector("form");

  //Act
  await wait(() => {
    fireEvent.change(email, {
      target: {
        value: "example@email.com",
      },
    });
    fireEvent.change(password, {
      target: {
        value: "password",
      },
    });
  });

  await wait(() => {
    fireEvent.submit(form);
  });

  //Assert
  expect(email.value).toBe("example@email.com");
  expect(password.value).toBe("password");

  // tests the submission
  expect(console.info).toHaveBeenNthCalledWith(
    1,
    "A name was submitted: example@email.com"
  );
  expect(console.info).toHaveBeenNthCalledWith(
    2,
    "A password was submitted: password"
  );

  restoreConsole();
});
