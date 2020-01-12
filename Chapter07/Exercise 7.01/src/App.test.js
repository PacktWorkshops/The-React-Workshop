import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Animal from './App';

configure({ adapter: new Adapter() });

it('renders the Animal component', () => {
  const wrapper = mount(<App />);

  expect(wrapper.find(Animal).length).toEqual(1);
});

it('passes a prop', () => {
  const wrapper = mount(<Animal />);

  wrapper.setProps({ name: 'Tiger' });

  expect(wrapper.props('name')).toEqual({ name: 'Tiger' });
});
