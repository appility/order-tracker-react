import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow, mount, render, unmount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import ProgressMarker from './ProgressMarker.js'

describe('ProgressMarker', () => {

  beforeEach(() => {

  })

  it('renders without crashing', () => {
    let items = [{
        Nodes: [] 
      }]
    const div = document.createElement('div')
    ReactDOM.render(<ProgressMarker items={items} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders a number of ProgressSteps', () => {
    const div = document.createElement('div')
    let items = [{
        Nodes: [] 
      }]
    ReactDOM.render(<ProgressMarker items={items} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
