import React from 'react'
import ReactDOM from 'react-dom'
import sinon from 'sinon'
import 'jest-dom/extend-expect';
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Caterpillar from './Caterpillar.js'

configure({ adapter: new Adapter() })

describe('Caterpillar', () => {

	it('renders without crashing', () => {
  	const div = document.createElement('div')
  	ReactDOM.render(<Caterpillar />, div)
  	ReactDOM.unmountComponentAtNode(div)
	});

  it('outputs an SVG element', () => {
		const wrapper = mount(<Caterpillar />)
		expect(wrapper.find('svg').length).toEqual(1)
	})
	
  it('calls componentDidMount', () => {
    sinon.spy(Caterpillar.prototype, 'componentDidMount')
    mount(<Caterpillar />)
    expect(Caterpillar.prototype.componentDidMount.calledOnce).toEqual(true)
  })

  it('calls animate method', () => {
    sinon.spy(Caterpillar.prototype, 'animate')
		mount(<Caterpillar />)
    expect(Caterpillar.prototype.animate.calledOnce).toEqual(true)
  })
})
