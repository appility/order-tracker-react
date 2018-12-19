import React, { Component } from 'react'
import { isEmpty } from './../utils/Validations'
import classNames from 'classnames'
import OptionallyDisplayed from './../utils/OptionallyDisplayed.js'
import Tooltip from './../components/Tooltip'
import Popover from './../modules/Popover.js'
import PropTypes from 'prop-types'
import './FormControl.css'

export default class FormControl extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEmpty: false,
      isInvalid: false,
      isError: false,
      inputValue: ''
    }
    this.input = React.createRef()
  }

  static getDerivedStateFromProps(props, current_state) {
    let tempState = {}
    if (current_state.isError!== props.isError) {
      tempState.isError = props.isError
    }
    if (current_state.isEmpty!== props.isEmpty) {
      tempState.isEmpty = props.isEmpty
    }
    if (current_state.isInvalid!== props.isInvalid) {
      tempState.isInvalid = props.isInvalid
    }
    return tempState
  }

  onChange(event) {
    let inputValue = event.target.value
    this.setState({ 
      inputValue: inputValue
    })
    if ( isEmpty(inputValue) ){
      this.setState({
        isEmpty: true,
        isError: true
      })
    }
  }

  onFocus(event) {
    if (this.props.scrollIntoView) {
      let el = event.target
      el.scrollIntoView(true)
    }
  }

  onBlur(event) {
    this.props.onBlur(event)
  }

  returnErrorType() {
    return this.state.isEmpty ? this.props.emptyText : this.props.errorText
  }

  returnTooltip() {
    return this.props.tooltipText ?
        <Tooltip 
          id={this.props.name}
          text={this.props.tooltipText}
          /> : null
  }

  returnRequiredIcon() {
    return this.props.required ? {__html: '&#x0002A;'} : ''
  }

  render() {
    let className = classNames({
      'form-control': true,
      'error': this.state.isError
    })
    return (
      <div className={ className }>
        <label>{ this.props.label } 
          <span dangerouslySetInnerHTML={this.returnRequiredIcon()} />
          { this.returnTooltip() }
        </label>
        <input 
          type={this.props.type || 'text'} 
          className={ this.props.inputClassname } 
          placeholder={this.props.placeholder} 
          value={this.state.inputValue}
          onChange={this.onChange.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          name={this.props.name} 
          ref={this.input} 
          aria-describedby={`${this.props.name}-helptext`} />
        <OptionallyDisplayed display={this.state.isError}>
          <Popover 
            mode = "error"
            id = {this.props.name}
            className = "bottom"
            ariaHidden = {!!this.state.isError}
            isOpen = {this.state.isError} 
            role = "alert" 
            text = {this.returnErrorType()} 
            iconType = "warning"
            />
        </OptionallyDisplayed>
        <p className="help-text" id={`${this.props.name}-helptext`}>{this.props.helpText}</p>  
      </div>
    )
  }
}

FormControl.propTypes = {
  type: PropTypes.string, 
  placeholder: PropTypes.string, 
  inputValue: PropTypes.string,
  text: PropTypes.string, 
  name: PropTypes.string, 
  errorText: PropTypes.string,
  inputClassname:  PropTypes.string,
  onInputBlur: PropTypes.func,
  onFieldChanged: PropTypes.func,
  isError: PropTypes.bool,
  scrollIntoView: PropTypes.bool
}

FormControl.defaultProps = {
  type: 'text',
  placeholder: '',
  text: '',
  name: '',
  onInputBlur: function() {},
  isError: false
}
