import React from 'react'
import Cross from '../components/Ikons/Cross'
import './Close.css'

const Close = ( props ) => (
  <a className={ `close ` + props.className } role="button">
  	<Cross width={16} height={16} />
  </a>
)

export default Close;

Close.defaultProps = {
	className: 'primary'
}
