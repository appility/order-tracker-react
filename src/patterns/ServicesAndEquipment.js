import React from 'react'
import OptionallyDisplayed from './../utils/OptionallyDisplayed'
import { FormatPrice }from './../utils/Core'
import ServicesAndEquipmentItem from './ServicesAndEquipmentItem'

const ServicesAndEquipment = (props) => (
  <table className="minimal">
    <thead>
      <tr>
        <th colSpan="3" className="h3">{props.ProductDetailsTitle}</th>
        <th><span className="visually-hidden">Cost</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="3">{ props.ContractProductDisplayName } {props.ParentOrderItem.DisplayName}</td>
        <td className="align-right">
        	<span className="price bold">&pound;{FormatPrice(props.ParentOrderItem.OneOffPrice)}</span> 
          <span className="price-text">one-off</span><br/>
          <span className="price bold">&pound;{FormatPrice(props.ParentOrderItem.MonthlyPrice)}</span> 
          <span className="price-text">monthly</span>
				</td>
      </tr>
    </tbody>
    <OptionallyDisplayed display={props.OrderItemsWithCharge.length > 0}>
      <thead>
        <tr>
          <th colSpan="3" className="h3">Additional items</th>
          <th><span className="visually-hidden">Qty</span></th>
        </tr>
      </thead>
      <tbody>
            {props.OrderItemsWithCharge.map((item, index)  => (  
          <ServicesAndEquipmentItem item={item} index={index} key={index}/>
        ))}
      </tbody>
    </OptionallyDisplayed>
    <OptionallyDisplayed display={props.OrderItemsWithNoCharge.length > 0}>
      <thead>
        <tr>
          <th colSpan="3" className="h3">Included at no charge</th>
          <th><span className="visually-hidden">Qty</span></th>
        </tr>
      </thead>
      <tbody>
            {props.OrderItemsWithNoCharge.map((item, index)  => (  
          <ServicesAndEquipmentItem item={item} index={index} key={index}/>
        ))}
      </tbody>
    </OptionallyDisplayed>
    <tfoot>
      <tr>
        <th id="total" colSpan="3" className="align-right">
          <span className="price bold">Totals (all prices exclude VAT)</span></th>
        <td className="align-right">
        	<span className="price bold">&pound;{FormatPrice(props.TotalOneOffPrice)}</span> 
          <span className="price-text">one-off</span><br/>
          <span className="price bold">&pound;{FormatPrice(props.TotalMonthlyPrice)}</span> 
          <span className="price-text">monthly</span>
        </td>
      </tr>
    </tfoot>
  </table>
);

export default ServicesAndEquipment
