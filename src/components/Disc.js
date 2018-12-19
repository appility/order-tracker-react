import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DiscStyled = styled.div`
  background-color: ${props => props.fill};
  color: ${props => props.color};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  line-height: ${props => props.height}px;
`

export default function Disc(props) {
  return (
    <DiscStyled 
      width={props.width} 
      height={props.height}
      fill={props.fill} 
      color={props.color}
      >{props.children}</DiscStyled>
  )
}

Disc.propTypes = {
  fill: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

Disc.defaultProps = {
  fill: 'red',
  color: 'white',
  width: 40,
  height: 40
}
