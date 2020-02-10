import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

test('renders correctly', () => {
  const {container} = render(<App/>);
  expect(container).toMatchSnapshot();
});

test('loads and displays form', async () => {
  //Arrange
  const { container } = render(<App />);
  const tos = container.querySelector('input[type="checkbox"]');
  const name = container.querySelector('input[type="text"]');
  const email = container.querySelector('input[type="email"]');
  const passwords = container.querySelectorAll('input[type="password"]');
  const password = passwords[0];
  const passwordConfirm = passwords[1];

  //Act
  await wait(() => {
    fireEvent.change(email, {
      target: {
        value: 'example@email.com'
      }
    });
    fireEvent.change(password, {
      target: {
        value: 'password'
      }
    });
    fireEvent.change(passwordConfirm, {
      target: {
        value: 'password'
      }
    });
    fireEvent.change(name, {
      target: {
        value: 'Theo'
      }
    });
    fireEvent.change(tos, {
      target: {
        checked: true
      }
    })
  });

  //Assert
  expect(email.value).toBe('example@email.com');
  expect(password.value).toBe('password');
  expect(passwordConfirm.value).toBe('password');
  expect(name.value).toBe('Theo');
  expect(tos.checked).toBeTruthy()
});

test('displays an error message', async () => {
  //Arrange
  const { container } = render(<App />);
  const tos = container.querySelector('input[type="checkbox"]');
  const name = container.querySelector('input[type="text"]');
  const email = container.querySelector('input[type="email"]');
  const passwords = container.querySelectorAll('input[type="password"]');
  const submit = container.querySelector('input[type="submit"]');
  const password = passwords[0];
  const passwordConfirm = passwords[1];

  //Act
  await wait(() => {
    fireEvent.change(email, {
      target: {
        value: ''
      }
    });
    fireEvent.change(password, {
      target: {
        value: ''
      }
    });
    fireEvent.change(passwordConfirm, {
      target: {
        value: 'aa'
      }
    });
    fireEvent.change(name, {
      target: {
        value: ''
      }
    });
    fireEvent.change(tos, {
      target: {
        value: true
      }
    });

    fireEvent.blur(email);
    fireEvent.blur(password);
    fireEvent.blur(passwordConfirm);
    fireEvent.blur(name);
  });

  //Assert
  expect(container).toMatchSnapshot();
});
