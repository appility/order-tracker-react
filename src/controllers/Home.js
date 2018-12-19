import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { isEmpty, isInvalidPostcode } from './../utils/Validations'
import HomeLayout from './../layouts/Home'

export default class HomeController extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoggedIn: false,
      redirect: false,
      redirectUrl: null,
      isPostcodeInvalid: false,
      isOrderRefInvalid: false
    }
    this.errors = []
    this.handleOrderReferenceSubmit = this.handleOrderReferenceSubmit.bind(this)
  }

  returnRedirectUrl (orderRef, postcode) {
    return '/order/' + orderRef + '/' + postcode
  }

  handleOrderReferenceSubmit(orderRef, postcode) {
    let redirectUrl = this.returnRedirectUrl(orderRef, postcode)
    this.setState({ 
      redirectUrl: redirectUrl,
      redirect: true
    })
  }

  isFormInvalid( orderRef, postcode ) {
    return ( isEmpty(orderRef) || (isEmpty(postcode) || isInvalidPostcode(postcode) )) 
  }

  isOrderRefInvalid( orderRef ) {
    return isEmpty(orderRef)
  }

  isPostcodeInvalid( postcode ) {
    return ( isEmpty(postcode) || isInvalidPostcode(postcode) )
  }

  render() {
    const { redirect, redirectUrl } = this.state;
    if (redirect) {
      return <Redirect to={ redirectUrl }/>
    }
     return <HomeLayout 
              orderReferenceInputRef={ el => this.orderReferenceInput = el }
              postcodeInputRef={ el => this.postcodeInput = el }
              onOrderReferenceSubmit={ this.handleOrderReferenceSubmit }
              errors = { this.state.errors }
              isPostcodeInvalid = { this.state.isPostcodeInvalid }
              validatePostcode = { this.isPostcodeValid }
            />
  }
}
