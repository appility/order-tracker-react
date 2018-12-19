import React from "react"
import PhaseBanner from './../patterns/PhaseBanner'
import LinkWithIcon from './../modules/LinkWithIcon'
import OptionallyDisplayed from './../utils/OptionallyDisplayed'
import StatusLabel from './../patterns/StatusLabel'
import ProgressMarker from './../components/ProgressMarker'
import Chat from './../patterns/Chat'
import ServicesAndEquipment from './../patterns/ServicesAndEquipment'
import BillingDetails from './../patterns/BillingDetails'
import Addresses from './../patterns/Addresses'
import AddPostcode from './../patterns/AddPostcode'

const hasTimeLine = (props) => {
  return Boolean(props.TimeLineDetails.length 
    && props.TimeLineDetails[0]
    && props.TimeLineDetails[0].Nodes.length > 0) 
}

const hasPostcode = (props) => {
  return Boolean(props.match.params.postcode)
}

const isAuthorised = (props) => {
  return Boolean(props.AuthLevel === 1)
}

const OrderItem = (props) => {
    let orderRef = props.match.params.id
    let postcode = props.match.params.postcode ? props.match.params.postcode : ''
    return (
      <main id="main">
        <PhaseBanner orderRef={orderRef} /> 
        <div className="grid-container">
          <LinkWithIcon
            to={{pathname: `/order/${orderRef}/${postcode}`}}
            className="margin-top-20" type="back">Back</LinkWithIcon>
          <OptionallyDisplayed display={!hasPostcode(props)}>
            <div className="margin-top-30">
              <AddPostcode buttonText={'Add postcode'} {...props} />
            </div>
          </OptionallyDisplayed>
          <h1 className="margin-top-30">Order Item</h1>
          <h2 className="h3 bold inline-block">{props.ProductSummary.ProductName}</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>{props.ProductSummary.OrderItemReference}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <StatusLabel status={props.ProductSummary.Status} />
        </div>
        <OptionallyDisplayed display={hasTimeLine(props)}>
          <div className="grid-container">
            <h3 className="margin-top-30">Order progress</h3>
            <hr className="light" />
            <ProgressMarker items={props.TimeLineDetails} />
          </div>
        </OptionallyDisplayed>
        <div className="grid-container">
            <ServicesAndEquipment {...props.ProductOrderItems} />
          <br />
        </div>
        <OptionallyDisplayed display={Boolean(props.IsPostCodeValidated)}>
          <div className="grid-container">
            <BillingDetails {...props.BillingDetails} />
            <Addresses {...props.BillingDetails} />
          </div>
        </OptionallyDisplayed>
        <Chat orderRef={orderRef} />
      </main>
      )}

export default OrderItem;
