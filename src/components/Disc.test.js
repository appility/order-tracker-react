import React from 'react'
import ReactDOM from 'react-dom'
/* Application files */
import Disc from './Disc.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Disc />, div)
  ReactDOM.unmountComponentAtNode(div)
})
