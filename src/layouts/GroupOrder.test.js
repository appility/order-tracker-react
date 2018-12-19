import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import GroupOrder from './GroupOrder.js'

const props = {
	match : {
		params: {
			id: 'G12345'
		}
	}
}

describe('GroupOrder', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<GroupOrder { ...props} />);
  });

  it('renders a heading', () => {
    const wrapper = shallow(<GroupOrder { ...props} />);
    expect(wrapper.contains(<h1 className="margin-top-30">View Group Order</h1>)).toEqual(true);
  });
})
