import React from 'react'
import PropTypes from 'prop-types'
import OptionallyDisplayed from './../utils/OptionallyDisplayed'
import { isArray }from './../utils/Core'
import { IsDateInPast, ReturnFormattedDate }from './../utils/Date'
import Circle from './../components/Ikons/Circle.js'
import CheckCircle from './../components/Ikons/CheckCircle.js'
import LinkToCarrierTracking from './../patterns/LinkToCarrierTracking'

const MARKER_ICON = {
  'complete': <CheckCircle fill="#008A00" />,
  'pending': <Circle fill="#666666" />
}

const enginerAppointmentNotRequired = (Date, NodeType) => {
  return ( NodeType === 4 && Date === null ) ? true : false
}

const returnIcon = (Date, NodeType) => {
  if (NodeType === 5) return MARKER_ICON['complete']
  return ( IsDateInPast(Date) ) ? MARKER_ICON['complete'] :  MARKER_ICON['pending']
}

export default function ProgressStep(props) {

  const {
    Date,
    Description,
    DisplayName,
    NodeType,
    DispatchDetails
  } = props
  
  if ( enginerAppointmentNotRequired(Date, NodeType) ) {
    return ( null )
  }

  return (
    <li className="progress-step">
    	<span className="progress-marker">
    		{ returnIcon(Date, NodeType) }
    	</span>
    	<span className="progress-text">
      	<p className="progress-title">
          {DisplayName}&nbsp;  
           {Date && ReturnFormattedDate(Date)}
        </p>
      	<p className="note">{Description}</p>
        <OptionallyDisplayed display={isArray(DispatchDetails)}>
          <LinkToCarrierTracking {...DispatchDetails} />
        </OptionallyDisplayed>
    	</span>
    </li>
  )
}

ProgressStep.propTypes = {
  item: PropTypes.shape({
    Date: PropTypes.string,
    Description: PropTypes.string, 
    DispatchDetails: PropTypes.func, 
    DisplayName: PropTypes.string, 
    IsActiveNode: PropTypes.bool,
    IsFirstActiveNode: PropTypes.bool,
    NodeType: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
  })
}
