import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import { MemoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

test('renders correctly', () => {
  const history = createBrowserHistory();

  history.push("/dashboard");
  const {container} = render(
    <MemoryRouter>
      <Dashboard />
    </MemoryRouter>);

  expect(container).toMatchSnapshot()
});
