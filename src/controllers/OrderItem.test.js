import React from 'react'
import ReactDOM from 'react-dom'
/* Application files */
import OrderItem from './OrderItem.js'

it('renders without crashing', () => {
  let props = { 
    match: {
      params: {
        id: 'BT00009',
        itemId: 'BT00009-01'
      }
    }
  }
  const div = document.createElement('div')
  ReactDOM.render(<OrderItem {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

