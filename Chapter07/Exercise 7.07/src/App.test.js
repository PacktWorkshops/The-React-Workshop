import React from 'react';
import { configure, mount, shallow } from 'enzyme';
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

it('passes the first donation', () => {
  const wrapper = shallow(<Animal />);

  expect(wrapper.render().find('.donation-color').eq(1).text()).toEqual('$10');
});
