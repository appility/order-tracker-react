import React from "react"
import PropTypes from 'prop-types'

const { string, number } = PropTypes

export default function Info({ height, width, fill }) {
  return (
    <svg width={ width + `px` } height={ height + `px` } viewBox="0 0 5 15">
      <desc>Information icon</desc>
        <g id="info/contextual-help-dark" transform="translate(-5.000000, -1.000000)" fill={fill}>
            <path d="M8.694,12.5 L6.445,12.5 L6.445,6.013 L8.694,6.013 L8.694,12.5 Z M6.367,3.816 C6.367,3.48666502 6.4774989,3.21800104 6.6985,3.01 C6.91950111,2.80199896 7.20766489,2.698 7.563,2.698 C7.91833511,2.698 8.20866554,2.80199896 8.434,3.01 C8.65933446,3.21800104 8.772,3.48666502 8.772,3.816 C8.772,4.14533498 8.65933446,4.41399896 8.434,4.622 C8.20866554,4.83000104 7.91833511,4.934 7.563,4.934 C7.20766489,4.934 6.91950111,4.83000104 6.6985,4.622 C6.4774989,4.41399896 6.367,4.14533498 6.367,3.816 Z" id="i"></path>
        </g>
    </svg>
  )
}

Info.propTypes = {
  width: number,
  height: number,
  fill: string
}

Info.defaultProps = {
  width: 5, 
  height: 15, 
  fill: '#ffffff'
}

