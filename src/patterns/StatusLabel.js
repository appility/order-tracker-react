import React from "react";
import PropTypes from 'prop-types';
import Label from './../modules/Label';

const { string } = PropTypes;

const CLASSNAMES = {
	'Pending' : 'black',
	'Open' : 'black',
	'In Progress' : 'black',
	'Cancelled' : 'warning',
  'Delayed' : 'alert',
  'Completed' : 'success'
};

const StatusLabel = ({status}) => {
  return (
    <Label 
      className={CLASSNAMES[status]}
      text={status}
    />
  )
}

export default StatusLabel;

StatusLabel.propTypes = {
  status: string
};

StatusLabel.defaultProps = {
  StatusLabel: 'Pending'
};

