import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import App from './App';

configure({ adapter: new Adapter() });

describe('component rendering', () => {
  it('renders the App component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.length).toEqual(1);
  });
});

const API = `https://api.unsplash.com/photos/random`;

const fetchData = async () => {
  return await axios.get(API, {
    headers: {
      Authorization:
        'Client-ID 6463359ac22d145576915c2fd1d28838f53e80174b2e95fc0b86026b6c7d6955'
    }
  });
};

jest.mock('axios');

describe('fetch data', () => {
  it('fetches data successfully from the API', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ status: 200 }));

    await expect(fetchData()).resolves.toEqual({ status: 200 });
  });
});
