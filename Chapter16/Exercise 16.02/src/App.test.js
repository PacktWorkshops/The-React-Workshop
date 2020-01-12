import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import App from './App';
import FontList from './FontList';

configure({ adapter: new Adapter() });

describe('component rendering', () => {
  it('renders the FontList component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find(FontList).length).toEqual(1);
  });
});

const API_KEY = '12345';
const API = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=popularity`;

const fetchData = async query => {
  const url = API;
  return await axios.get(url);
};

jest.mock('axios');

describe('fetch data', () => {
  it('requests data from the same API', () => {
    expect(axios.get).toHaveBeenCalledWith(API);
  });

  it('fetches data successfully from the API', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ status: 200 }));

    await expect(fetchData()).resolves.toEqual({ status: 200 });
  });
});

describe('button click event', () => {
  it('triggers the popularity button click', () => {
    const wrapper = mount(<App />);

    wrapper
      .find('button.card__button')
      .at(0)
      .simulate('click');

    wrapper.update();

    expect(wrapper.state('sort')).toEqual('popularity');
  });

  it('triggers the trending button click', () => {
    const wrapper = mount(<App />);

    wrapper
      .find('button.card__button')
      .at(1)
      .simulate('click');

    wrapper.update();

    expect(wrapper.state('sort')).toEqual('trending');
  });
});
