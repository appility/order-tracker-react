import React from 'react'
import './Badge.css'

const Badge = ( props ) => (
  <span className={ `badge ${props.className}` }>{ props.text }</span>
)

export default Badge

Badge.defaultProps = {
	className: '',
	text: ''
}
