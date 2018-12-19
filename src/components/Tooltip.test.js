import React from 'react'
import ReactDOM from 'react-dom'
import Tooltip from './Tooltip.js'
import assert from 'assert'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Tooltip />, div)
  ReactDOM.unmountComponentAtNode(div)
});

//  handleFocus() {
//   this.setState({
//     isOpen: true
//   })
// }
//handleBlur()
