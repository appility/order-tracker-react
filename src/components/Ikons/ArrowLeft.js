import React from "react";
import PropTypes from 'prop-types'

const { number, string } = PropTypes

export default function ArrowLeft({ height, width, fill }) {
  return (
  	<svg width={ width + 'px' } height={ height + 'px' } viewBox="0 0 8 15" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
      <g id="arrow-left" transform="translate(0.000000, -2.000000)" fill={fill}>
        <g transform="translate(4.000000, 9.500000) rotate(-270.000000) translate(-4.000000, -9.500000) translate(-3.500000, 5.500000)">
  			  <path d="M7.879,6.91788051 C7.879,6.91788051 14.836,0.95888051 14.836,0.95888051 C15.032,0.79088051 15.032,0.51788051 14.836,0.34988051 C14.64,0.18188051 14.133,-0.0491194904 13.937,0.11888051 C13.937,0.11888051 7.492,5.37388051 7.492,5.37388051 C7.492,5.37388051 1.066,0.0498805096 1.066,0.0498805096 C0.87,-0.11911949 0.344,0.18188051 0.148,0.34988051 C0.049,0.43388051 0,0.54488051 0,0.65488051 C0,0.76488051 0.049,0.87488051 0.148,0.95888051 C0.148,0.95888051 7.104,6.91788051 7.104,6.91788051 C7.211,7.00888051 7.352,7.04588051 7.492,7.03788051 C7.631,7.04588051 7.773,7.00888051 7.879,6.91788051 Z"></path>
        </g>
      </g>
    </svg>
  )
}

ArrowLeft.propTypes = {
  width: number,
  height: number,
  fill: string
}

ArrowLeft.defaultProps = {
  width: 8,
  height: 15,
  fill: '#6400AA'
}
