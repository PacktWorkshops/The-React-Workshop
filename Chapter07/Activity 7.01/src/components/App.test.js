import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import ConvertForm from './ConvertForm';
import StatusContext from './StatusContext';

configure({ adapter: new Adapter() });

it('renders the ConvertForm component', () => {
  const wrapper = mount(<App />);

  expect(wrapper.find(ConvertForm).length).toEqual(1);
});

it('passes a prop through Context API', () => {
  const wrapper = mount(
    <StatusContext.Provider value={25}>
      <ConvertForm temperature={{ temperature: { celsius: 25 } }} />
    </StatusContext.Provider>
  );

  expect(wrapper.props('temperature')).toEqual({
    temperature: { temperature: { celsius: 25 } }
  });
});
