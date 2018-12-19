import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Store from './../stores/main.js'
import { RemoveWhitespace } from './../utils/Core'
import { isEmpty, isInvalidPostcode } from './../utils/Validations'
import Form from './../modules/Form'
import FormControl from './../components/FormControl'
import Tooltip from './../components/Tooltip'
import InfoCard from './../components/InfoCard'

export default class AddPostcode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postcodeHasError: false,
      reloadWithPostcode: false
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (event) {
 		event.preventDefault()
    let value = RemoveWhitespace(this.postcodeInput.value)
    if ( this.isPostcodeInvalid(value) ) return
    let redirectUrl = this.returnRedirectUrl(value)
    this.setState({ 
      redirectUrl: redirectUrl,
      reloadWithPostcode: true
    })
  }

  isPostcodeInvalid( postcode ) {
    return ( !isEmpty(postcode) && isInvalidPostcode(postcode) ) 
  }

  onPostcodeBlur(event) {
    let value = RemoveWhitespace(event.target.value)
    let isInvalid = this.isPostcodeInvalid(value)
    this.setState({ 
      postcodeHasError: isInvalid
    })
  }

	renderRedirect = () => {
		if (this.state.reloadWithPostcode) {
			return <Redirect to={ this.state.redirectUrl } />
		}
	}

	returnRedirectUrl = (postcode) => {
    // group order or standard order 
		let optionalSlash = ( this.props.location.pathname.substr(-1) === '/' )  ? '' : '/'
    return this.props.location.pathname + optionalSlash + postcode
  }

  render() {
    return (
      <Form onSubmit={ this.onSubmit } 
        postcodeHasError={ this.state.postcodeHasError }>
        { this.renderRedirect() }
        <h3>Add a postcode to see more order details and make changes.</h3>
        <div className="grid-x grid-margin-x">
          <div className="cell large-5">
          	<FormControl 
              type = 'text'
              label = 'Postcode - billing, service or shipping' 
              placeholder = 'EC1A 7AJ (optional)'
              name = 'OrderPostcode' 
              errorText = "The postcode you entered doesn't appear to be valid."
              hasError = {this.state.postcodeHasError} 
              onInputBlur = { this.onPostcodeBlur.bind(this) }
              inputClassname= 'uppercase'
              inputRef = { el => this.postcodeInput = el }
              scrollIntoView = {false}
              />
          </div>
          <div className="cell large-2 padding-top-29-medium">
            <input type="submit" className="button" value={ this.props.buttonText } />
          </div>
        </div>  
      </Form>
    )}
  }
