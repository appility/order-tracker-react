import React from "react"
import { isGroupOrder } from './../utils/Core'
import Callout from './../modules/Callout'

const rootLegacyURL = 'https://secure.business.bt.com'

const returnLegacyURL = (orderRef) => {
	if (!orderRef) return rootLegacyURL + '/Account/LoginRedirect.aspx?tabId=3'
	let path = isGroupOrder(orderRef) ? '/OrderManagement/GroupOrder?OrderRef=' : '/OrderManagement/Index?OrderRef='
	return rootLegacyURL + path + orderRef
}

const PhaseBanner = (props) => {
	const { orderRef } = props     
  return (
    <Callout className="margin-bottom-0">
      <div className="grid-container">
      	<h6>BETA Order Tracker</h6>
        <p className="note">
				This is a trial service. Not working for you?&nbsp; 
				 <a href={`${returnLegacyURL(orderRef)}`} target="_blank" rel="noopener">View your order in the old order tracker</a>.
        </p>
      </div>
    </Callout>
    )
}

export default PhaseBanner
