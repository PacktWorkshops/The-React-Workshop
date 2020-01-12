import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import App from './App';
import Characters from './Characters';

configure({ adapter: new Adapter() });

describe('component rendering', () => {
  it('renders the Characters component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find(Characters).length).toEqual(1);
  });
});

const API_KEY = '12345';

const fetchData = async request => {
  const url = `https://www.potterapi.com/v1/${request}?key=${API_KEY}`;
  return await axios.get(url);
};

jest.mock('axios');

describe('fetch data', () => {
  it('fetches houses data successfully from the API', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ status: 200 }));

    await expect(fetchData('houses')).resolves.toEqual({ status: 200 });
  });
});
