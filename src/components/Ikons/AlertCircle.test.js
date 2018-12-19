import React from 'react';
import ReactDOM from 'react-dom';
/* Application files */
import AlertCircle from './AlertCircle.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlertCircle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
