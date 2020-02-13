import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders correctly', () => {
  const {container} = render(<App/>);
  expect(container).toMatchSnapshot();
});

test('routes to dashboard page correctly', () => {
  const history = createBrowserHistory();

  history.push("/dashboard");
  const {container} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);

  expect(container).toMatchSnapshot()
});

test('routes to dashboard map widget correctly', () => {
  const history = createBrowserHistory();

  history.push("/dashboard/map");
  const {container} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);

  expect(container).toMatchSnapshot()
});

test('routes to dashboard table widget correctly', () => {
  const history = createBrowserHistory();

  history.push("/dashboard/table");
  const {container} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);

  expect(container).toMatchSnapshot()
});

test('routes to dashboard chart widget correctly', () => {
  const history = createBrowserHistory();

  history.push("/dashboard/chart");
  const {container} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);

  expect(container).toMatchSnapshot()
});
