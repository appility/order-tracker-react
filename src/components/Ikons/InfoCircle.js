import React from "react"
import PropTypes from 'prop-types'

const { string, number } = PropTypes;

export default function InfoCircle({ height, width, fill, stroke }) {
  return (
    <svg width={width + `px`} height={height + `px`} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
      <desc>Information</desc>
      <path stroke={stroke} fill={fill} strokeWidth="1" vectorEffect="non-scaling-stroke" d="M16 4.026c-3.065 0-6.129 1.169-8.468 3.506-4.677 4.677-4.677 12.259 0 16.936 2.339 2.337 5.403 3.506 8.468 3.506s6.129-1.169 8.468-3.506c4.677-4.677 4.677-12.259 0-16.936-2.339-2.337-5.403-3.506-8.468-3.506zM16 6.026c2.664 0 5.169 1.037 7.054 2.92 1.884 1.885 2.92 4.39 2.92 7.054s-1.037 5.169-2.92 7.054c-1.885 1.884-4.39 2.92-7.054 2.92s-5.169-1.037-7.054-2.92c-1.884-1.885-2.92-4.39-2.92-7.054s1.037-5.169 2.92-7.054c1.885-1.884 4.39-2.92 7.054-2.92z"></path>
      <g id="info/contextual-help-dark" transform="translate(8.000000, 8.000000)" fill={fill}>
        <path d="M8.694,12.5 L6.445,12.5 L6.445,6.013 L8.694,6.013 L8.694,12.5 Z M6.367,3.816 C6.367,3.48666502 6.4774989,3.21800104 6.6985,3.01 C6.91950111,2.80199896 7.20766489,2.698 7.563,2.698 C7.91833511,2.698 8.20866554,2.80199896 8.434,3.01 C8.65933446,3.21800104 8.772,3.48666502 8.772,3.816 C8.772,4.14533498 8.65933446,4.41399896 8.434,4.622 C8.20866554,4.83000104 7.91833511,4.934 7.563,4.934 C7.20766489,4.934 6.91950111,4.83000104 6.6985,4.622 C6.4774989,4.41399896 6.367,4.14533498 6.367,3.816 Z" id="i"></path>
      </g>
    </svg>
  )
}

InfoCircle.propTypes = {
  width: number,
  height: number,
  fill: string,
  stroke: string
}

InfoCircle.defaultProps = {
  width: 40,
  height: 40,
  fill: '#ffffff',
  stroke: 'none'
}

 