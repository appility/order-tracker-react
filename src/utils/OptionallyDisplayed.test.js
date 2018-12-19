import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import assert from 'assert';

import OptionallyDisplayed from './OptionallyDisplayed.js';

it('Displays children when "display" prop is true', () => {
	const wrapper = shallow(<OptionallyDisplayed display={true}><div>MY CHILD</div></OptionallyDisplayed>);
	expect(wrapper.contains(<div>MY CHILD</div>)).toEqual(true);
});

it('Does not display children when "display" prop is false', () => {
	const wrapper = shallow(<OptionallyDisplayed display={false}><div>MY CHILD</div></OptionallyDisplayed>);
	expect(wrapper.contains(<div>MY CHILD</div>)).toEqual(false);
});
