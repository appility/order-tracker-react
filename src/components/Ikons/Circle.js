import React from "react"
import PropTypes from 'prop-types'

const { string, number } = PropTypes

export default function Circle(props) {
  const { height, width, fill, stroke } = props
  return (
  <svg width={width + 'px'} height={height + 'px'} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
    <desc>Circle</desc>
    <path stroke={stroke} strokeWidth="1" fill={fill} vectorEffect="non-scaling-stroke" d="M16 4.026c-3.065 0-6.129 1.169-8.468 3.506-4.677 4.677-4.677 12.259 0 16.936 2.339 2.337 5.403 3.506 8.468 3.506s6.129-1.169 8.468-3.506c4.677-4.677 4.677-12.259 0-16.936-2.339-2.337-5.403-3.506-8.468-3.506zM16 6.026c2.664 0 5.169 1.037 7.054 2.92 1.884 1.885 2.92 4.39 2.92 7.054s-1.037 5.169-2.92 7.054c-1.885 1.884-4.39 2.92-7.054 2.92s-5.169-1.037-7.054-2.92c-1.884-1.885-2.92-4.39-2.92-7.054s1.037-5.169 2.92-7.054c1.885-1.884 4.39-2.92 7.054-2.92z"></path>
  </svg>
  )
}

Circle.propTypes = {
  width: number,
  height: number,
  fill: string,
  stroke: string
}

Circle.defaultProps = {
  width: 40,
  height: 40,
  fill: '#c2c2c2',
  stroke: 'none'
}
