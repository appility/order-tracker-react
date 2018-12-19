import React, { Component } from 'react'
import { RemoveWhitespace } from './../utils/Core'
import { isEmpty, isInvalidPostcode } from './../utils/Validations'
import Form from './../modules/Form'
import FormControl from './../components/FormControl'
import Tooltip from './../components/Tooltip'


class OrderReferenceForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isErrorPostcode: false,
      isInvalidPostcode: false,
      isEmptyPostcode: false,
      isErrorOrderReference: false,
      isInvalidOrderReference: false,
      isEmptyOrderReference: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isEmptyPostcode !== this.state.isEmptyPostcode) {
      this.setState({ isError: true });
    }
  }

  onPostcodeBlur(event) {
    let value = RemoveWhitespace(event.target.value)
    this.setState({ 
      isInvalidPostcode: isInvalidPostcode(value) ? true : false,
      isEmptyPostcode: isEmpty(value) ? true : false,
      isErrorPostcode: ( isInvalidPostcode(value) || isEmpty(value) ) ? true : false
    })
  }

  onOrderReferenceBlur(event) {
    let value = RemoveWhitespace(event.target.value)
    this.setState({ 
      isEmptyOrderReference: isEmpty(value),
      isErrorOrderReference: isEmpty(value)
    })
  }

  isFormInvalid( orderRef, postcode ) {
    return ( isEmpty(orderRef) || (isEmpty(postcode) || isInvalidPostcode(postcode) )) 
  }

  isInvalidPostcode ( postcode ) {
    return isInvalidPostcode(postcode)
  }

  isEmpty ( string ) {
    return isEmpty(string)
  }

  handleSubmit(event) {
    event.preventDefault()
    let orderRefValue = RemoveWhitespace(this.orderReferenceRef.input.current.value)
    let postCodeValue = RemoveWhitespace(this.postcodeRef.input.current.value)

    let isFormInvalid = this.isFormInvalid(orderRefValue, postCodeValue)
    if (!isFormInvalid) {
      this.props.onOrderReferenceSubmit(orderRefValue, postCodeValue)
      return
    }
    console.log(postCodeValue)
    console.log('this.isInvalidPostcode(postCodeValue)', this.isInvalidPostcode(postCodeValue))
    this.setState({
      isEmptyPostcode: this.isEmpty(postCodeValue) ? true : false,
      isInvalidPostcode: ( this.isInvalidPostcode(postCodeValue) ) ? true : false,
      isErrorPostcode: ( this.isInvalidPostcode(postCodeValue) || this.isEmpty(postCodeValue) ) ? true : false,
      isEmptyOrderReference : this.isEmpty(orderRefValue) ? true : false,
      isErrorOrderReference : this.isEmpty(orderRefValue) ? true : false
    })
  }

  render() {
    return (
      <Form onSubmit={ this.handleSubmit }>
        <div className="grid-x grid-margin-x">
          <div className="cell large-5">
            <FormControl 
              type = 'text'
              label = 'Order reference' 
              placeholder = 'e.g. BTA12345'
              name = 'OrderReferenceNumber' 
              emptyText = "Please provide an order reference number."
              inputClassname= 'uppercase'
              helpText = ''
              scrollIntoView = {false}
              required={true}
              isEmpty={this.state.isEmptyOrderReference}
              isError = {this.state.isErrorOrderReference}
              onBlur={this.onOrderReferenceBlur.bind(this)}
              ref={ el => this.orderReferenceRef = el }
              tooltipText = "You can find your order reference number near the top of your order confirmation email or letter from BT. Most common formats are BTA12345 or GBT12345."
              />
          </div>
          <div className="cell large-5">
            <FormControl 
              type = 'text'
              label = 'Postcode - billing, service or shipping' 
              placeholder = 'e.g. EC1A 7AJ'
              name = 'OrderPostcode' 
              errorText = "The postcode you entered doesn't appear to be valid."
              emptyText = "We are sorry, to proceed with your request you need to provide your postcode."
              inputClassname= 'uppercase'
              helpText = ''
              scrollIntoView = {true}
              required={true}
              isEmpty={this.state.isEmptyPostcode}
              isInvalid={this.state.isInvalidPostcode}
              isError = {this.state.isErrorPostcode}
              onBlur={this.onPostcodeBlur.bind(this)}
              ref={ el => this.postcodeRef = el }
              />
          </div>
          <div className="cell large-2 padding-top-29-medium">
            <input type="submit" className="button" value={ this.props.buttonText } />
          </div>
        </div>  
      </Form>
    )}
  }

export default OrderReferenceForm
