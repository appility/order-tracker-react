import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import Home from './Home.js';

describe('Home', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Home />)
  })

  it('renders a heading', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.contains(<h1 className="margin-top-30">View Order Status</h1>)).toEqual(true)
  })
})

