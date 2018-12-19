import React from 'react';
import ReactDOM from 'react-dom';
/* Application files */
import ArrowUpLong from './ArrowUpLong.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArrowUpLong />, div);
  ReactDOM.unmountComponentAtNode(div);
});
