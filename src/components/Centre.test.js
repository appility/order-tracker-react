import React from 'react'
import ReactDOM from 'react-dom'
/* Application files */
import Centre from './Centre.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Centre />, div)
  ReactDOM.unmountComponentAtNode(div)
});
