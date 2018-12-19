import { Component } from 'react'
import { withRouter } from 'react-router-dom'

/*
* NOTE: exporting both ScrollToTop and the wrapped ScrollToTop, for testing
*/

export class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
      window.previousLocation = prevProps.location
    }
  }
  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)