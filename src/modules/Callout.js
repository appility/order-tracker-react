import React from 'react'
import Classnames from 'classnames'
import './Callout.css'
import CheckCircle from './../components/Ikons/CheckCircle.js'
import AlertCircle from './../components/Ikons/AlertCircle.js'

const STATUS_ICON = {
	completed: <CheckCircle fill={"#333333"} width={30} height={30} />,
	alert: <AlertCircle fill={"#333333"} width={30} height={30}  />
}

const Callout = ( props ) => {
	let calloutClass = Classnames('callout', props.className, {
  	'withIcon': props.icon
	})
  return (
		<div className={ calloutClass }>
			{STATUS_ICON[props.icon]}
			{props.children}
		</div>
)};

Callout.defaultProps = {
  className: '',
  icon: null
}

export default Callout
