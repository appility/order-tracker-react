import React from 'react'
import './Card.css'

const Card = ( props ) => (
	<div className={ `card clearfix ${props.className}` }>
		<div className='card-section'>
			{props.children}
		</div>
	</div>
)

Card.defaultProps = {
  className: 'secondary'
};

export default Card
