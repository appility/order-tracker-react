import React from 'react';
import ReactDOM from 'react-dom';
import Label from './Label.js';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import assert from 'assert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Label />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/* ariaDescribedbyId, className, text are rendered */
