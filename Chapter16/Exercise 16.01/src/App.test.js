import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import App from './App';
import FontList from './FontList';

configure({ adapter: new Adapter() });

it('renders the FontList component', () => {
  const wrapper = mount(<App />);

  expect(wrapper.find(FontList).length).toEqual(1);
});

const API_KEY = '12345';
const API = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=popularity`;

const fetchData = async query => {
  const url = API;
  return await axios.get(url);
};

jest.mock('axios');

it('requests data from the same API', () => {
  expect(axios.get).toHaveBeenCalledWith(API);
});

it('fetches data successfully from the API', async () => {
  axios.get.mockImplementation(() => Promise.resolve({ status: 200 }));

  await expect(fetchData()).resolves.toEqual({ status: 200 });
});
