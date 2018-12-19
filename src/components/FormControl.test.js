import React from 'react'
import ReactDOM from 'react-dom'
/* Application files */
import FormControl from './FormControl.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  let props = {
  	onInputBlur: function() {}
  }
  ReactDOM.render(<FormControl {...props}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
