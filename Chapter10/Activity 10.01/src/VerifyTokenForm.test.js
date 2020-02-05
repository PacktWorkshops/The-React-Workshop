import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VerifyTokenForm from './VerifyTokenForm';

test('renders correctly', () => {
  const {container} = render(<VerifyTokenForm/>);
  expect(container).toMatchSnapshot();
});
