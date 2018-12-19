import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';
import assert from 'assert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*

test style
font-weight

*/