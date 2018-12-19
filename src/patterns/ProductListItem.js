import React from 'react'
import PropTypes from 'prop-types'
import OptionallyDisplayed from './../utils/OptionallyDisplayed'
import { Link } from "react-router-dom"
import { FormatPrice }from './../utils/Core'
import ContextualDateMessage from './ContextualDateMessage'
import StatusLabel from './../patterns/StatusLabel'
import Price from './../patterns/Price'
import SiteVisit from './../patterns/SiteVisit'
import './ProductListItem.css'

const hasEngineerAppointment = (props) => {
  return ( props.EngineeringAppointmentDate !== null )
}

function ProductListItem(props) {
    const {
      EngineeringAppointmentDate,
      EngineeringAppointmentSlot,
      InstallationAddress,
      OrderKey,
      MonthlyPrice,
      OneOffPrice,
      OrderItemReference,
      ProductDuedate,
      ExpectedDispatchDate,
      OrderStatusLongDescription,
      ProductIcon,
      ProductName,
      ProductDescription,
      SiteContact,
      Status,
      isCeaseOrCancelled
    } = props

    let { postcode = '' } = props.params

    if (isCeaseOrCancelled){
      return (null)
    }
    return (
      <div className="productItem">
        <div className="productItem__Group_A">
          <div className="productItem__Cell">
            <p className="bold inline-block block-medium margin-bottom-10 margin-right-10">{ProductName}</p>
            </div>
          <div className="productItem__Cell">
            <p className="inline-block block-medium"><StatusLabel status={Status} /></p>
          </div>
          <div className="productItem__Cell">
            <p><ContextualDateMessage 
              Status={Status} 
              ProductDuedate={ProductDuedate}
              ExpectedDispatchDate={ExpectedDispatchDate}
              OrderStatusLongDescription={OrderStatusLongDescription}
              /></p>
          </div>
        </div>
        <div className="productItem__Group_B">
          <div className="productItem__Cell">
            <p className="">
            <Price 
              OneOffPrice={OneOffPrice}
              MonthlyPrice={MonthlyPrice} />
              </p>
          </div>
          <div className="productItem__Cell">
            <Link to={{
                pathname: `/order-item/${OrderKey}/${OrderItemReference}/${postcode}`
              }} className="button hollow flush-small">View details</Link>
          </div>
          <OptionallyDisplayed display={hasEngineerAppointment(props)}>
            <div className="productItem__Cell margin-top-30 margin-bottom-10">
              <SiteVisit 
                EngineeringAppointmentDate={EngineeringAppointmentDate}
                EngineeringAppointmentSlot={EngineeringAppointmentSlot}
                InstallationAddress={InstallationAddress}
                SiteContact={SiteContact}
                ProductDescription={ProductDescription}
                />
            </div>
          </OptionallyDisplayed>
        </div>
      </div>
    )
  } 

export default ProductListItem

ProductListItem.propTypes = {
  item: PropTypes.shape({
    ActiveMilestone: PropTypes.string,
    AuthLevel: PropTypes.number,
    BundleContractTerm: PropTypes.string,
    EngineeringAppointmendivate: PropTypes.string,
    EngineeringAppointmentSlot: PropTypes.string,
    ExpectedDispatchDate: PropTypes.string,
    IsBundleProduct: PropTypes.bool,
    IsDelayedOrder: PropTypes.bool,
    IsPreAppointment: PropTypes.number,
    MonthlyPrice: PropTypes.number,
    OneOffPrice: PropTypes.number,
    OrderItemReference: PropTypes.string,
    OrderKey: PropTypes.string,
    OrderStatusLongDescription: PropTypes.string,
    PercentageCompletion: PropTypes.number,
    Producdivescription: PropTypes.string,
    Producdivuedate: PropTypes.string,
    ProductIcon: PropTypes.string,
    ProductName: PropTypes.string,
    ProductType: PropTypes.number,
    Status: PropTypes.string,
    isCeaseOrCancelled: PropTypes.bool
  })
}
