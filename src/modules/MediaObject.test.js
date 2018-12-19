import React from 'react';
import ReactDOM from 'react-dom';
import MediaObject from './MediaObject.js';
import assert from 'assert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let item = { EngineeringAppointmentDate: '', EngineeringAppointmentSlot: '' }
  ReactDOM.render(<MediaObject item={item} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*

  className is rendered
 
*/
