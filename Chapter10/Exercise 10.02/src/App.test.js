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

test('routes to main page correctly', () => {
  const history = createBrowserHistory();

  history.push("/");
  const {container} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);

  expect(container).toMatchSnapshot()
});

test('routes to page2 correctly', () => {
  const history = createBrowserHistory();

  history.push("/page2");
  const {container} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);

  expect(container).toMatchSnapshot()
});

test('routes to page3 correctly', () => {
  const history = createBrowserHistory();

  history.push("/Page3?param=321");
  const {container} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);

  expect(container).toMatchSnapshot()
});

test('routes to 404 page correctly', () => {
  const history = createBrowserHistory();

  history.push("/page4");
  const {container} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);

  expect(container).toMatchSnapshot()
});

