import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import ArrowLeft from './../components/Ikons/ArrowLeft'

const { string, object } = PropTypes

const returnIconComponent = (type) => {
	let icons = {
		'back': <ArrowLeft />,
		'default': <Link />
	}
	return icons[type] ? icons[type] : icons['default'] 
}

export default function LinkWithIcon(props) {
	const { to, className, type } = props
	let IconComponent = returnIconComponent(type)
  return (
  	<Link
  		to={to} 
  		className={`link with-icon ${className}`}>
			{IconComponent}
			<span>{props.children}</span>
		</Link>
  )
}

LinkWithIcon.propTypes = {
  to: object,
  color: string,
  className: string
};

LinkWithIcon.defaultProps = {
  to: '',
  color: '',
  className: null
};


