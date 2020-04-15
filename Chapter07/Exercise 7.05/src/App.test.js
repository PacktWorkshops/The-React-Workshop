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

it('passes a prop in an array', () => {
  const wrapper = mount(<Animal />);

  wrapper.setProps([
    {
      name: 'Tiger',
      number: 3890,
      endangered: true,
    },
  ]);

  expect(wrapper.props()[0]).toEqual({
    name: 'Tiger',
    number: 3890,
    endangered: true,
  });
});

it('passes the photo', () => {
  const wrapper = mount(<Animal />);

  wrapper.setProps([
    {
      name: 'Tiger',
      number: 3890,
      endangered: true,
      photo: 'https://source.unsplash.com/Si6Obte6Bu0/200x100',
    },
  ]);

  expect(wrapper.render().find('img').length).toEqual(3);
});
