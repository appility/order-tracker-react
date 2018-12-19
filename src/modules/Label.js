import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

const { string } = PropTypes;

export default function Label(props) {
	const { ariaDescribedbyId, className, text } = props
  return (
		<span className={ `label ${className}` } id={ariaDescribedbyId}>{text}</span>
	)
};

Label.propTypes = {
  ariaDescribedbyId: string,
  text: string,
  className: string
};

Label.defaultProps = {
  ariaDescribedbyId: '',
  text: 'LABEL',
  className: null
};




/*

Example 

  primary: #6400AA,
  purchase: #E60050,
  secondary: #f8f4fc,
  success: #008A00,
  warning: #FFDC00,
  information: #FFDC00,
  alert: #D0021B

<span class="label secondary">Secondary Label</span>
<span class="label success">Success Label</span>

<p aria-describedby="emailLabel">Re: re: re: you won't believe what's in this email!</p>
<span class="label" id="emailLabel"><i class="fi-x-circle"></i>High Priority</span>
*/


