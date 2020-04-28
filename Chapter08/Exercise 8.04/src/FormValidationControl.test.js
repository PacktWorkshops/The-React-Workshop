import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FormValidationControl from "./FormValidationControl";
import { act } from "react-dom/test-utils";

test("renders correctly", () => {
  const { container } = render(<FormValidationControl />);

  expect(container).toMatchSnapshot();
});

test("loads and displays form", async () => {
  //Arrange
  const { container } = render(<FormValidationControl />);
  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');

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

  //Assert
  expect(email.value).toBe("example@email.com");
  expect(password.value).toBe("password");
});

test("displays an error message", async () => {
  //Arrange
  const { container, queryByText } = render(<FormValidationControl />);
  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');

  //Act
  await wait(() => {
    fireEvent.change(email, {
      target: {
        value: "",
      },
    });
    fireEvent.change(password, {
      target: {
        value: "",
      },
    });
    fireEvent.blur(email);
    fireEvent.blur(password);
  });

  const emailErrorMessage = queryByText(/Name is Required/);
  const passwordErrorMessage = queryByText(/Min length of Password is 8 chars/);

  expect(emailErrorMessage).not.toBeNull();
  expect(passwordErrorMessage).not.toBeNull();
});

test("displays an error message", async () => {
  // mock info, used in submission, so we can spy on it
  let originalInfo = console.info;

  global.console = { ...global.console, info: jest.fn() };

  // mock setTimeout in submission, so we can advance it
  jest.useFakeTimers();

  //Arrange
  const { container, queryByText } = render(<FormValidationControl />);

  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');
  const form = container.querySelector("form");

  // values that passes validation
  const emailValue = "hey@ho.com";
  const passwordValue = "passwordpass";

  //Act
  await wait(() => {
    fireEvent.change(email, {
      target: {
        value: emailValue,
      },
    });
    fireEvent.change(password, {
      target: {
        value: passwordValue,
      },
    });
    fireEvent.blur(email);
    fireEvent.blur(password);
  });

  let emailErrorMessage = queryByText(/Name is Required/);
  let passwordErrorMessage = queryByText(/Min length of Password is 8 chars/);

  // error messages should not be there if the fields are passed validation
  expect(emailErrorMessage).toBeNull();
  expect(passwordErrorMessage).toBeNull();

  // submit form
  await wait(() => {
    fireEvent.submit(form);
  });

  // advance setTimeout
  act(() => {
    jest.advanceTimersByTime(3000);
  });

  const expectedLog = JSON.stringify(
    { name: emailValue, password: passwordValue },
    null,
    2
  );

  // assert against console.info
  expect(console.info).toHaveBeenCalledWith(expectedLog);

  global.console = { ...global.console, info: originalInfo };
});
