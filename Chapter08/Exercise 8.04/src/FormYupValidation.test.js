import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FormYupValidation from "./FormYupValidation";
import { act } from "react-dom/test-utils";

test("renders correctly", () => {
  const { container } = render(<FormYupValidation />);

  expect(container).toMatchSnapshot();
});

test("loads and displays form", async () => {
  //Arrange
  const { container } = render(<FormYupValidation />);
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
  const { container, queryByText, getByText } = render(<FormYupValidation />);
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

  const emailErrorMessage = getByText(/Required/);
  const passwordErrorMessage = queryByText(/Min length of Password is 8 chars/);

  expect(emailErrorMessage).not.toBeNull();
  expect(passwordErrorMessage).not.toBeNull();
});

test("displays an error message", async () => {
  let originalInfo = console.info;

  global.console = { ...global.console, info: jest.fn() };
  jest.useFakeTimers();

  //Arrange
  const { container, queryByText } = render(<FormYupValidation />);
  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');
  const form = container.querySelector("form");

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

  let emailErrorMessage = queryByText(/Required/);
  let passwordErrorMessage = queryByText(/Min length of Password is 8 chars/);

  expect(emailErrorMessage).toBeNull();
  expect(passwordErrorMessage).toBeNull();

  await wait(() => {
    fireEvent.submit(form);
  });

  act(() => {
    jest.advanceTimersByTime(3000);
  });

  const expectedLog = JSON.stringify(
    { name: emailValue, password: passwordValue },
    null,
    2
  );

  expect(console.info).toHaveBeenCalledWith(expectedLog);

  global.console = { ...global.console, info: originalInfo };
});
