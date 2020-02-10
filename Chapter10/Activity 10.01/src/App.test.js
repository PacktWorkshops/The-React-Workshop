import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders correctly', () => {
  const {container} = render(<App/>);
  expect(container).toMatchSnapshot();
});
