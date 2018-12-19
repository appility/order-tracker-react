import React from 'react'
import ReactDOM from 'react-dom'
import ActivityCard from './ActivityCard.js'
import assert from 'assert'

let item = { EngineeringAppointmentDate: '', EngineeringAppointmentSlot: '' }

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ActivityCard item={item} />, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders its children', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ActivityCard item={item} />, div)
  ReactDOM.unmountComponentAtNode(div)
})


