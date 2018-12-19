import React from "react";
import PropTypes from 'prop-types'

const { number, string } = PropTypes

export default function Warning ({ height, width, fill }) {
  return (
    <svg width={width + `px`} height={height + `px`} style={{padding: '5px'}} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
        <desc>Warning</desc>
        <defs></defs>
          <g id="warning">
            <path d="M16,4.47213595 L3.23606798,30 L28.763932,30 L16,4.47213595 Z M16,0 L32,32 L0,32 L16,0 Z" id="Triangle" fillRule="nonzero" fill={fill}></path>
            <path d="M15,25 C15,24.7168936 15.0949358,24.479453 15.2848101,24.2876712 C15.4746845,24.0958895 15.7130787,24 16,24 C16.2869213,24 16.5253155,24.0958895 16.7151899,24.2876712 C16.9050642,24.479453 17,24.7168936 17,25 C17,25.2831064 16.9050642,25.520547 16.7151899,25.7123288 C16.5253155,25.9041105 16.2869213,26 16,26 C15.7130787,26 15.4746845,25.9041105 15.2848101,25.7123288 C15.0949358,25.520547 15,25.2831064 15,25 Z" id="!" fill={fill}></path>
            <polygon id="Path" points="17.0027008 22.0046692 14.998642 22 15 14 17 14" fill={fill}></polygon>
          </g>
    </svg>
  )
}

Warning.propTypes = {
  width: number,
  height: number,
  fill: string
}

Warning.defaultProps = {
  width: 40,
  height: 40,
  fill: '#FFFFFF'
}
