import React from 'react'
import ReactDOM from 'react-dom'
/* Application files */
import InfoCard from './InfoCard.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InfoCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})
