import React from "react";
import PropTypes from 'prop-types';

const { string, number } = PropTypes;

export default function Cross(props) {
  const { height, width, fill, stroke } = props
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <desc></desc>
      <defs></defs>
      <g stroke="none" strokeWidth="1" fill="none">
          <g id="close-button" transform="translate(-17.000000, -17.000000)" fill={fill}>
              <g id="x" transform="translate(17.000000, 17.000000)">
                  <rect id="Rectangle-1" transform="translate(8.000000, 8.000000) rotate(45.179235) translate(-8.000000, -8.000000) " x="-1" y="7" width="18" height="2"></rect>
                  <rect id="Rectangle-2" transform="translate(8.000000, 8.000000) rotate(136.419272) translate(-8.000000, -8.000000) " x="-1" y="7" width="18" height="2"></rect>
              </g>
          </g>
      </g>
    </svg>
  )
}

Cross.propTypes = {
  width: number,
  height: number,
  fill: string,
  stroke: string
};

Cross.defaultProps = {
  width: 40,
  height: 40,
  fill: '#fff',
  stroke: 'none'
};


