import React from 'react'
import ReactDOM from 'react-dom'
/* Application files */
import Map from './Map.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Map />, div)
  ReactDOM.unmountComponentAtNode(div)
})
