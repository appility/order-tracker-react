import React from "react";
import PropTypes from 'prop-types';
import { ReturnFormattedDate, IsDateInPast  } from './../utils/Date';

const { string } = PropTypes;

const stateLookup = {
	'Completed': 'Completed on',
	'Delayed': 'Revised completion on',
	'Delayed_NoDate': 'Revised completion on',
	'In progress': 'Expected completion on'
}

const returnText = (date) => {
	if (IsDateInPast(date)) {
		return stateLookup['Completed']
	} else {

	}
}

const CompletionDate = ({date}) => {
  return (
		<p>{returnText(date)} &nbsp; 
			<b>{date && ReturnFormattedDate(date)}</b>
		</p>
  )
}

export default CompletionDate;

CompletionDate.propTypes = {
  date: string
};

CompletionDate.defaultProps = {
  date: 'Pending'
};

