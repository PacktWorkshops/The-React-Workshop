import React from "react";
import {
  render,
  fireEvent,
  wait,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MyEnhancedLoginForm } from "./WithFormikExample";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

test("renders correctly", () => {
  const { container } = render(<MyEnhancedLoginForm />);
});

test("loads and displays form", async () => {
  //Arrange
  const { container } = render(<MyEnhancedLoginForm />);
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

test("submits the form", async () => {
  //Arrange
  const { container } = render(<MyEnhancedLoginForm />);
  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');
  const submit = container.querySelector('input[type="submit"]');

  expect(submit.disabled).toBeFalsy();

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
    fireEvent.click(submit);
  });

  expect(submit.disabled).toBeTruthy();
});

test("the validation message shows true only while submission", async () => {
  window.alert = jest.fn();

  jest.useFakeTimers();

  //Arrange
  const { container, queryByText } = render(<MyEnhancedLoginForm />);
  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');
  const submit = container.querySelector('input[type="submit"]');

  // by def not validating
  let isNotValidatingMessage = queryByText("Is not Validating");

  expect(submit.disabled).toBeFalsy();

  expect(isNotValidatingMessage).not.toBe(null);

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
    fireEvent.click(submit);
  });

  // after submission isnotvalidating is gone from the DOM
  isNotValidatingMessage = queryByText("Is not Validating");
  expect(isNotValidatingMessage).toBe(null);

  // after submission validation appears
  let isValidatingMessage = queryByText("Is Validating");
  expect(isValidatingMessage).not.toBe(null);

  await wait(() => {}, { timeout: 2000 });

  // advance setTimout
  act(() => {
    jest.advanceTimersToNextTimer(2);
  });

  // make sure alert got called
  expect(window.alert).toHaveBeenCalledWith(
    JSON.stringify(
      {
        name: "example@email.com",
        password: "password",
      },
      null,
      2
    )
  );

  isNotValidatingMessage = queryByText("Is not Validating");
  expect(isNotValidatingMessage).not.toBe(null);

  isValidatingMessage = queryByText("Is Validating");
  expect(isValidatingMessage).toBe(null);
});
