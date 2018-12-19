import React from 'react';
import ReactDOM from 'react-dom';
import Callout from './Callout.js';
import assert from 'assert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Callout />, div);
  ReactDOM.unmountComponentAtNode(div);
});

