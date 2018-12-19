import React from 'react';
import ReactDOM from 'react-dom';
import Close from './Close.js';
import assert from 'assert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Close />, div);
  ReactDOM.unmountComponentAtNode(div);
});


/* check classname prop passed in */

/* contains cross comp */

/* dow clicking on it trigger function pass in */

