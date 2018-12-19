/* istanbul ignore next */

import React from 'react'
import OptionallyDisplayed from './../utils/OptionallyDisplayed'
import { FormatPrice }from './../utils/Core'
import './Price.css'

function Price(props) {
    const {
      OneOffPrice,
      MonthlyPrice
    } = props
    return (
      <span>
        <OptionallyDisplayed display={OneOffPrice !== 0}>
          <span className="price bold">&pound;{FormatPrice(OneOffPrice)}</span> 
          <span className="price-text">one-off</span><br/>
        </OptionallyDisplayed>
        <OptionallyDisplayed display={MonthlyPrice !== 0}>
          <span className="price bold">&pound;{FormatPrice(MonthlyPrice)}</span> 
          <span className="price-text">monthly</span>
        </OptionallyDisplayed>
      </span>
    )
  }

export default Price
