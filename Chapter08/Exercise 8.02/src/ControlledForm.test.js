import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {ControlledForm} from './ControlledForm';

test('renders correctly', () => {
  const {container} = render(<ControlledForm/>);
  expect(container).toMatchSnapshot();
});

test('loads and displays form', async () => {
  let alert = window.alert
  window.alert = jest.fn()

  //Arrange
  const { container } = render(<ControlledForm />);
  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');
  const form = container.querySelector('form');

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
    fireEvent.submit(form)
  })

  //Assert
  expect(email.value).toBe('example@email.com');
  expect(password.value).toBe('password');

  expect(window.alert).toHaveBeenCalledWith("A name was submitted: example@email.com")

  window.alert = alert
});
