#!/usr/bin/bash

yarn add --dev react-test-renderer enzyme enzyme-adapter-react-16

echo "import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
" > ./src/setupTests.js

echo "Add the following to your tests:

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
"