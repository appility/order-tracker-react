import React from "react";
import PropTypes from 'prop-types';

const { string } = PropTypes;

export default function ArrowUp(props) {
  const { height, width, fill } = props
  return (
    <svg width="12px" height="19px" viewBox="0 0 12 19" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
        <desc>Long arrow up</desc>
        <defs>↑</defs>
        <g stroke="none" strokeWidth="1" fill={fill}>
          <g transform="translate(-14.000000, -11.000000)" fill={fill}>
            <g transform="translate(20.000000, 20.000000) rotate(-180.000000) translate(-20.000000, -20.000000) translate(14.000000, 10.000000)">
              <rect id="Rectangle-Copy" x="5" y="-3.55271368e-15" width="2" height="18"></rect>
              <rect id="Rectangle-Copy" transform="translate(8.008861, 15.878201) rotate(-315.000000) translate(-8.008861, -15.878201) " x="7.00886068" y="12.3782015" width="2" height="7"></rect>
              <rect id="Rectangle-Copy" transform="translate(4.008861, 15.878201) rotate(-45.000000) translate(-4.008861, -15.878201) " x="3.00886068" y="12.3782015" width="2" height="7"></rect>
          </g>
          </g>
        </g>
    </svg>
  )
}

ArrowUp.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
};

ArrowUp.defaultProps = {
  width: 40,
  height: 40,
  fill: 'black'
};

