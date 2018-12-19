/* window */
import React, {Component} from "react"
import PropTypes from 'prop-types'
import { Debounce, inRange } from './utils/Core'

const { string } = PropTypes
const mobileMax=640, tabletMax=960
const delay = 200

const returnBreakpointName = (width) => {
  if (!width) return '';
  if ( width < mobileMax ) { return 'mobile'; }
    else if (width < tabletMax) { return 'tablet'; }
      else return 'desktop';
};

export class WithResize extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBreakpoint: ''
    }
  }
  getChildContext() {
    return { currentBreakpoint: this.state.currentBreakpoint }
  }
  componentDidMount() {
    this._resize_callback()
    window.addEventListener('resize', Debounce(this._resize_callback, delay).bind(this))
  }
  componentDidUnMount() {
    window.removeEventListener('resize', this._resize_callback);
  }
  _resize_callback() {
    let width = document.documentElement.clientWidth
    let breakpointName = returnBreakpointName(width)
    if (window.BTBOMEGA) {
      window.BTBOMEGA.currentBreakpoint = breakpointName
    }
    this.setState({
      currentBreakpoint: breakpointName
    })
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
      )
  }
}

WithResize.childContextTypes = {
  currentBreakpoint: string
};

export default WithResize
