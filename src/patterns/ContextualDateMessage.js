import React from "react"
import PropTypes from 'prop-types'
import { IsValidDate, ReturnFormattedDate, IsDateInPast} from './../utils/Date'
const { string } = PropTypes

const returnMessage = (Status, ProductDuedate, ExpectedDispatchDate, OrderStatusLongDescription) =>  {

  let ProductDuedateFormatted = ReturnFormattedDate(ProductDuedate)
  let ExpectedDispatchDateFormatted = ReturnFormattedDate(ExpectedDispatchDate)

	let MESSAGES = {
    'ProductDuedate_Future' : `Your service will be ready on <strong>${ProductDuedateFormatted}</strong>.`,
    'ProductDuedate_Past' : `Your service was activated on <strong>${ProductDuedateFormatted}</strong>.`,
    'ProductDuedate_Past_Not_Complete' : `Your service was due to be activated on <strong>${ProductDuedateFormatted}</strong>.`,
    'ExpectedDispatchDate_Future' : `Your equipment is expected to be dispatched on <strong>${ExpectedDispatchDateFormatted}</strong>.`,
    'ExpectedDispatchDate_Past' : `Your equipment was dispatched on <strong>${ExpectedDispatchDateFormatted}</strong>.`,
    'ExpectedDispatchDate_Past_Not_Complete' : `Your equipment was due to be dispatched on <strong>${ExpectedDispatchDateFormatted}</strong>.`
	}

  if ( (!ProductDuedate && !ExpectedDispatchDate) || (ProductDuedate === null && ExpectedDispatchDate === null)) {
    console.log('API ERROR: Both ProductDuedate & ExpectedDispatchDate are undefined or null')
    return OrderStatusLongDescription
  }

  if ( (!ProductDuedate || ProductDuedate === null) && !IsValidDate(ExpectedDispatchDate)) {
    console.log('API ERROR: ProductDuedate is not valid date')
    return ''
  }

  if ( (!ExpectedDispatchDate || ExpectedDispatchDate === null) && !IsValidDate(ProductDuedate)) {
    console.log('API ERROR: ExpectedDispatchDate is not valid date')
    return ''
  }

  if ( Status !== 'Completed' && ProductDuedate && ProductDuedate !== null ) {
    return IsDateInPast(ProductDuedate) ? MESSAGES['ProductDuedate_Past_Not_Complete'] : MESSAGES['ProductDuedate_Future']
  }
  else if ( Status !== 'Completed' && ExpectedDispatchDate && ExpectedDispatchDate !== null ) {
    return IsDateInPast(ExpectedDispatchDate) ? MESSAGES['ExpectedDispatchDate_Past_Not_Complete'] : MESSAGES['ExpectedDispatchDate_Future'] 
  }
  else if ( Status === 'Completed' && ProductDuedate && ProductDuedate !== null ) {
    return IsDateInPast(ProductDuedate) ? MESSAGES['ProductDuedate_Past'] : MESSAGES['ProductDuedate_Future']
  }
  else if ( Status === 'Completed' && ExpectedDispatchDate && ExpectedDispatchDate !== null ) {
    return IsDateInPast(ExpectedDispatchDate) ? MESSAGES['ExpectedDispatchDate_Past'] : MESSAGES['ExpectedDispatchDate_Future'] 
  }
  else {
    return ''
  }
}

const ContextualDateMessage = (props) => {
  let { Status, ProductDuedate, ExpectedDispatchDate, OrderStatusLongDescription } = props
  return (
    <span dangerouslySetInnerHTML={{__html: returnMessage(Status, ProductDuedate, ExpectedDispatchDate, OrderStatusLongDescription)}} />
    )
}

export default ContextualDateMessage

ContextualDateMessage.propTypes = {
  Status: string,
  ProductDuedate: string,
  ExpectedDispatchDate: string,
}

ContextualDateMessage.defaultProps = {
  Status: null,
  ProductDuedate: null,
  ExpectedDispatchDate: null,
}
