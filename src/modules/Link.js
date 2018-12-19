import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Link.css'

const { string, object } = PropTypes

export default function Link(props) {
  return (
  	<RouterLink {...props}>
			{props.children}
		</RouterLink>
  )
}

Link.propTypes = {
  to: object,
  className: string
};

Link.defaultProps = {
	to: {},
	className: 'link'
};


