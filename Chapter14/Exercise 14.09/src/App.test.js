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

const API = `https://images-api.nasa.gov/search`;

const fetchData = async query => {
  const url = API;
  return await axios.get(API, {
    params: { q: query }
  });
};

jest.mock('axios');

describe('fetch data', () => {
  it('fetches data successfully from the API', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ status: 200 }));

    await expect(fetchData('europa')).resolves.toEqual({ status: 200 });
  });
});

describe('form event', () => {
  it('triggers the popularity button click', () => {
    const wrapper = mount(<App />);

    wrapper.find('input').simulate('change', { target: { value: 'europa' } });

    expect(wrapper.find('input').prop('value')).toEqual('europa');
  });
});
