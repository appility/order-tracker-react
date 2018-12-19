
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Disc from './Disc.js'
import InfoIkon from './Ikons/Info.js'
import Popover from './../modules/Popover.js'
import './Tooltip.css'

const { bool, shape, string } = PropTypes

export default class Tooltip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleFocus() {
    this.setState({
      isOpen: true
    })
  }

  handleClick() {
    this.setState({
      isOpen: true
    })
  }

  handleBlur(event) {
    event.stopPropagation()
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <div className="tooltip">
        <button ref={this.button}
          aria-controls={ this.props.id }
          aria-haspopup="true" 
          aria-expanded={this.state.isOpen ? "true" : "false"} 
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onClick={this.handleClick}
          type='button'
          tabIndex='0'>
          <Disc fill={"#333"} width={15} height={15}>
            <InfoIkon fill={"#fff"} width={4} height={12} />
          </Disc>
        </button>
        <Popover 
          breakpointClasses={{mobile: "flush", tablet: "top", desktop: "top" }}
          closeButton={true}
          currentBreakpoint={this.context.currentBreakpoint}
          headline="Headline" 
          icon="alert" 
          id={this.props.id}
          isOpen={this.state.isOpen}
          text={this.props.text} 
          role="tooltip"
           />
      </div>
    )
  }
}

Tooltip.contextTypes = {
  currentBreakpoint: string
};
