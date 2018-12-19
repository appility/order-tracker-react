import React from 'react'
import './Button.css'

const Button = ( props ) => (
  <button className={ `button ${props.classModifiers}` }
    aria-pressed={ props.pressed }>
    { props.text }
  </button>
);

export default Button
