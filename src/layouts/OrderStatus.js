import React from "react"
import Centre from "./../components/Centre";
import Caterpillar from "./../components/Caterpillar";
import ErrorComponent from './../modules/Error';
import PhaseBanner from './../patterns/PhaseBanner'
import LinkWithIcon from './../modules/LinkWithIcon'
import OptionallyDisplayed from './../utils/OptionallyDisplayed'
import StatusCallout from './../patterns/StatusCallout'
import StatusLabel from './../patterns/StatusLabel'
import ProductList from './../patterns/ProductList'
import Chat from './../patterns/Chat'
import BillingDetails from './../patterns/BillingDetails'
import Addresses from './../patterns/Addresses'
import AddPostcode from './../patterns/AddPostcode'

const ReturnBackLink = (props) => {
  let path, text
  if (!window.previousLocation || window.previousLocation.pathname === '/') {
    path = '/'
    text = 'Track another order'
  } else if (props.OrderMetaInfo.GrouperOrderId) {
    path = `/order/${props.OrderMetaInfo.GrouperOrderId}`
    text = 'Back'
  } else {
    path = '/'
    text = 'Track another order'
  }
  return <LinkWithIcon
      to={{pathname: path }}
      className="margin-top-20 block"
      type="back">{text}</LinkWithIcon>
}

const shouldChatBeDisplayed = (status) => {
  return (status === 'Delayed') ? true : false
}

const shouldActivityBeDisplayed = (activities) => {
  //return ( activities.length ) ? true : false
  return false
}

const hasPostcode = (props) => {
  return Boolean(props.match.params.postcode)
}

const hasBillingDetails = (props) => {
  return ( props && props.hasOwnProperty('BillingDetails') )
}

const OrderStatus = (props) => {
  let {
    OrderDescription, 
    OrderRef, 
    OrderStatus,
    OrderStatusLongDescription,
    EstimatedCompletionDate
  } = props.OrderMetaInfo
  let { Products, TotalOneOffPrice, TotalMonthlyPrice, EngineerAppointments, IsBundleOrder } = props;
  return (
    <main id="main">
      <PhaseBanner OrderRef={OrderRef} />
      <StatusCallout 
        status={OrderStatus}
        date={EstimatedCompletionDate} 
        OrderStatusLongDescription = {OrderStatusLongDescription}
        />
      <div className="grid-container">
        {ReturnBackLink(props)}
        <h1 className="margin-top-30">Order Status</h1>
        <h2 className="h3 bold inline-block">{OrderDescription}</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{OrderRef}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <StatusLabel status={OrderStatus} />
      </div>
      <div className="grid-container">
        <OptionallyDisplayed display={!hasPostcode(props)}>
          <div className="margin-top-30">
            <AddPostcode buttonText={'Add postcode'} {...props} />
          </div>
        </OptionallyDisplayed>
      </div>
      <OptionallyDisplayed display={shouldChatBeDisplayed(OrderStatus)}>
        <Chat className="margin-top-60" OrderRef={OrderRef} />
        <br />
      </OptionallyDisplayed>
      <div className="grid-container">
        <h3 className="margin-top-30 margin-top-10-medium margin-bottom-20">Order items</h3>
        <ProductList 
          items={Products} 
          TotalMonthlyPrice={TotalMonthlyPrice}
          TotalOneOffPrice={TotalOneOffPrice}
          IsBundleOrder={IsBundleOrder}
          {...props}
          />
        <br />
      </div>
      <OptionallyDisplayed display={hasPostcode(props)}>
        {(() => {
          if (!hasBillingDetails(props)) {
            return <Centre><Caterpillar /></Centre>;
          } else {
          return  <div className="grid-container">
                    <BillingDetails {...props.BillingDetails} />
                    <Addresses {...props.BillingDetails} />
                  </div>
          }
        })()}
      </OptionallyDisplayed>
      <OptionallyDisplayed display={!shouldChatBeDisplayed(OrderStatus)}>
        <Chat OrderRef={OrderRef} />
      </OptionallyDisplayed>
    </main>
)}

export default OrderStatus
