import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from './LoginForm';

test('renders correctly', () => {
  const {container} = render(<LoginForm/>);
  expect(container).toMatchSnapshot();
});
