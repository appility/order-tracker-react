import React from 'react'
import PropTypes from 'prop-types'
import './ProgressMarker.css'
import ProgressStep from './ProgressStep'

export default function ProgressMarkers(props) {
  if (!props.items[0] || !props.items[0].Nodes) return (null)
  let items = props.items[0].Nodes
  return (
    <ul className="progress-tracker progress-tracker--vertical">
      {items.map((item, index)  => (  
        <ProgressStep {...item} index={index} key={index}/>
      ))}
    </ul>
  )
}

ProgressMarkers.propTypes = {
  href: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
}

ProgressMarkers.defaultProps = {
  href: '',
  color: '',
  className: null
}
