import React from 'react';
import './Form.css'; // Tell Webpack that Button.js uses these styles

const Form = ( props ) => (
  <form onSubmit={ props.onSubmit } name={props.name} >
    { props.children }
  </form>
);

export default Form;
