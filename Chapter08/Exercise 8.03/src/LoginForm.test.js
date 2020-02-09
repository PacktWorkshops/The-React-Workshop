import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {MyEnhancedLoginForm} from './WithFormikExample';

test('renders correctly', () => {
  const {container} = render(<MyEnhancedLoginForm/>);
  expect(container).toMatchSnapshot();
});

test('loads and displays form', async () => {
  //Arrange
  const {container} = render(<MyEnhancedLoginForm/>);
  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');

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
    })
  });

  //Assert
  expect(email.value).toBe('example@email.com');
  expect(password.value).toBe('password');
});

test('submits the form', async () => {
  //Arrange
  const {container} = render(<MyEnhancedLoginForm/>);
  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');
  const submit = container.querySelector('input[type="submit"]');

  expect(submit.disabled).toBeFalsy();

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
    })
  });

  await wait(() => {
    fireEvent.click(submit);
  });

  expect(submit.disabled).toBeTruthy();
});

