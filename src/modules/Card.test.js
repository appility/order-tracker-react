import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import assert from 'assert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});


/* check classname prop passed in */

