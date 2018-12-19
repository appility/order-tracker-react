import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router'
import Error from './Error.js';
import assert from 'assert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Error /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
