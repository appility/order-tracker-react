
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router} from 'react-router-dom'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
/* Application files */
import ScrollToTopWithRouter, {ScrollToTop} from './ScrollToTopRoute'

var spy = null

describe('ScrollToTop', () => {
  it('renders without crashing', () => {
    let props = {}
    const div = document.createElement('div')
    ReactDOM.render(<Router><ScrollToTopWithRouter><p>Child</p></ScrollToTopWithRouter></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders its children', () => {
    const comp = mount(<Router><ScrollToTopWithRouter><p>Child</p></ScrollToTopWithRouter></Router>)
    expect(comp.find('p').text()).toEqual('Child')
  })

  it('window.scrollTo is called when componentDidUpdate is called with new props', () => {
    let props = { 
      location: {
        pathname: '/'
      }
    }
    spy = jest.spyOn(window, 'scrollTo')
    const wrapper = shallow(<ScrollToTop {...props} ><p>Child</p></ScrollToTop>)
    wrapper.setProps({ 
      location: {
        pathname:'/order/2332'
      }
    })
    expect(spy).toHaveBeenCalledWith(0, 0)
  })

  it('window.scrollTo is NOT called when no new props set', () => {
    let props = {
      location: {
        pathname: '/'
      }
    }
    spy = jest.spyOn(window, 'scrollTo')
    const wrapper = shallow(<ScrollToTop {...props} ><p>Child</p></ScrollToTop>)
    expect(spy).not.toHaveBeenCalled()
  })

  afterEach(() => {
    if (spy) spy.mockRestore()
  })
})
