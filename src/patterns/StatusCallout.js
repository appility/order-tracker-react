import React from "react"
import PropTypes from 'prop-types'
import { ReturnFriendlyDayCountFromToday, ReturnFormattedDate, IsValidDate } from './../utils/Date'
import Callout from './../modules/Callout'
import InfoCircle from './../components/Ikons/InfoCircle.js'
import CheckCircle from './../components/Ikons/CheckCircle.js'
import AlertCircle from './../components/Ikons/AlertCircle.js'
import WarningTriangle from "./../components/Ikons/Warning"

const { string } = PropTypes

const CLASSNAMES = {
	'Pending' : 'neutral',
	'Open' : 'neutral',
	'In Progress' : 'neutral',
	'Cancelled' : 'warning',
  'Delayed' : 'alert',
  'Completed' : 'success'
}

const ICONS = {
	'Pending' : <InfoCircle fill="#ffffff" />,
	'Open' : <InfoCircle fill="#ffffff" />,
	'In Progress' : <InfoCircle fill="#ffffff" />,
	'Cancelled' : <AlertCircle fill="#0A0A0F" />,
  'Delayed' : <WarningTriangle fill="#ffffff" />,      
  'Completed' : <CheckCircle fill="#ffffff" />
}

const returnMessage = (status, date, OrderStatusLongDescription) =>  {
	let MESSAGES = {
		'Pending' : 'Your order is pending.',
		'Open' : 'Your order is open.',
		'In Progress' : `Your order will be ready ${ReturnFriendlyDayCountFromToday(date)}.`,
	  'In Progress_DateInvalid' : `Your order is in progress.`,
    'Cancelled' : 'Your order has been cancelled.',
		'Delayed' : `Your order has been delayed. ${OrderStatusLongDescription}`,
	  'Completed': `Your order was completed on <strong>${ReturnFormattedDate(date)}</strong>.`,
    'Completed_DateInvalid': `Your order has been completed.`
	};

  if ( status === 'Completed' && !IsValidDate(date) ) return MESSAGES['Completed_DateInvalid']

  if ( status === 'In Progress' && !IsValidDate(date) ) return MESSAGES['In Progress_DateInvalid']

  return MESSAGES[status]
}

const StatusCallout = (props) => {
  let {status, date, OrderStatusLongDescription=''} = props
  return (
    <Callout className={ `withIcon margin-bottom-0 ${CLASSNAMES[status]}` }>
      <div className="grid-container">
        {ICONS[status]}
        <p className="margin-bottom-0" dangerouslySetInnerHTML={{__html: returnMessage(status, date, OrderStatusLongDescription)}} />
      </div>
    </Callout>
    )
}

export default StatusCallout;

StatusCallout.propTypes = {
  status: string,
  date: string
}

StatusCallout.defaultProps = {
  status: 'Unknown',
  date: ''
}

/*
* Test this module with
* let {status, date, OrderStatusLongDescription} = {status:'In Progress', date: '29 August 2019', OrderStatusLongDescription:''}
*/
