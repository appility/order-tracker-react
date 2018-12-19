import React from 'react'
import classNames from 'classnames'
import OptionallyDisplayed from './../utils/OptionallyDisplayed.js'
import PropTypes from 'prop-types'
import Cross from '../components/Ikons/Cross'
import WarningTriangle from "./../components/Ikons/Warning"
import './Popover.css'

const returnIcon = (type) => {
  let icons = {
    'warning': <WarningTriangle />
  }
  return icons[type] ? icons[type] : icons['default'] 
}

const returnPosition = (props) => {
  const { breakpointClasses, currentBreakpoint, position } = props
  if (props.position) return props.position
  return breakpointClasses[currentBreakpoint] ? breakpointClasses[currentBreakpoint] : breakpointClasses['mobile']
}


export default function Popover(props) {
  const { iconType, isOpen, mode } = props
  let position = returnPosition(props)
  let popoverClass = classNames(
    'popover', 
    'popover-withicon': iconType,
    position, 
    {
    'popover-error': ( mode === 'error' ),
    'visually-hidden': !isOpen
    })
  return (
    <span 
      id={ props.id }
      className={ popoverClass } 
      role={ props.tooltip } 
      aria-hidden={ props.isOpen ? 'false' : 'true' }>
      <span className="popover__body">
        <OptionallyDisplayed display={iconType === 'warning'}>
          <span className="popover__icon icon-alert-white" role="img" aria-label="Alert">
            { returnIcon(iconType) }
          </span>
        </OptionallyDisplayed>
        <p className="popover__title"><b>{ props.title }</b></p>
        <p className="popover__text">{ props.text }</p>
      </span>
      <OptionallyDisplayed display={props.closeButton}>
        <i className="popover__close" role="button">
          <Cross width={16} height={16} fill="#6400AA" />
        </i>
      </OptionallyDisplayed>
    </span>
  )
}

Popover.propTypes = {
  mode: PropTypes.string,
  breakpointClasses: PropTypes.shape({
    mobile: PropTypes.string.isRequired,
    tablet: PropTypes.string,
    desktop: PropTypes.string
  }),
  id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  isOpen: PropTypes.bool,
  position: PropTypes.string,
  iconType: PropTypes.string
}

Popover.defaultProps = {
  mode: 'default',
  breakpointClasses: { mobile: 'bottom' },
  currentBreakpoint: null,
  iconType: '',
  id: 'popover',
  isOpen: false,
  position: null,
  title: '',
  text: ''
}
