import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import Link from './Link.js';
import assert from 'assert';

it('renders without crashing', () => {
  const div = document.createElement('div');
   ReactDOM.render(<StaticRouter location="someLocation">
      <Link to="#" /></StaticRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*   
  href: string,
  color: string,
  className: string are rendered
  */
