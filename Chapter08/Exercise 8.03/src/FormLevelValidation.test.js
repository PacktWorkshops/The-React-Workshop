import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FormLevelValidation from './FormLevelValidation';

test('renders correctly', () => {
  const {container} = render(<FormLevelValidation/>);
  expect(container).toMatchSnapshot();
});

test('loads and displays form', async () => {
  //Arrange
  const { container } = render(<FormLevelValidation />);
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


test('displays an error message', async () => {
  //Arrange
  const { container } = render(<FormLevelValidation />);
  const email = container.querySelector('input[type="text"]');
  const password = container.querySelector('input[type="password"]');

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
    fireEvent.blur(password);
    fireEvent.blur(email);
  });


  //Assert
  expect(container).toMatchSnapshot();
});


