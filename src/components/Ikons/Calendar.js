import React from "react";
import PropTypes from 'prop-types';

const { string, number } = PropTypes;

export default function Calendar(props) {
  const { height, width, fill, stroke } = props
  return (
	  <svg width={width} height={height} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
	    <desc>Calendar icon</desc>
	    <defs></defs>
			<path fill="#000" style="fill: var(--color1, #000)" d="M20.67-0v1.996l-12-0.004v-1.992h-2.002v1.992l-6.002-0.002v28.006l28.002 0.076v-28.074l-5.998-0.002v-1.996h-2zM2.666 3.992h4.002v1.994h2.002v-1.992l12 0.002v1.996h2v-1.996l3.998 0.002v4.004h-24.002v-4.010zM2.666 28v-17.998h24.002v18.066l-24.002-0.068z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M9.691 13.996h1.992v-2h-1.992z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M13.693 13.996h1.992v-2h-1.992z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M17.697 13.996h1.994v-2h-1.994z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M21.679 13.996h1.994v-2h-1.994z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M9.691 18.004h1.992v-2h-1.992z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M13.693 18.004h1.992v-2h-1.992z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M17.697 18.004h1.994v-2h-1.994z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M21.679 18.004h1.994v-2h-1.994z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M5.687 21.996h1.992v-2h-1.992z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M9.691 21.996h1.992v-2h-1.992z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M13.693 21.996h1.992v-2h-1.992z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M17.697 21.996h1.994v-2h-1.994z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M21.679 21.996h1.994v-2h-1.994z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M5.687 26.006h1.992v-2h-1.992z"></path>
			<path fill="#000" style="fill: var(--color1, #000)" d="M9.691 26.006h1.992v-2h-1.992z"></path>
			</svg>
  )
}

Calendar.propTypes = {
  width: number,
  height: number,
  fill: string,
  stroke: string
};

Calendar.defaultProps = {
  width: 50,
  height: 50,
  fill: '#008A00',
  stroke: 'none'
};

