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
