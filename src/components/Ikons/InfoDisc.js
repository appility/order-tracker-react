import React from "react";
import PropTypes from 'prop-types';
import Disc from './Disc.js';
import Ikon from './Info.js';

const { string, number } = PropTypes;

export default function InfoDisc(props) {
  const { height, width, fill, stroke } = props
  return (
		<Disc fill={"#333"} width={width + `px`} height={width + `px`}>
      <Ikon fill={"#fff"} />
		</Disc>
  )
}

InfoDisc.propTypes = {
  width: number,
  height: number,
  fill: string,
  stroke: string
};

InfoDisc.defaultProps = {
  width: 50,
  height: 50,
  fill: '#008A00',
  stroke: 'none'
};

 