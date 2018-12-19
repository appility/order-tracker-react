import React, {Component} from "react"
import { withRouter } from 'react-router-dom'
import { Track } from './utils/AnalyticsTrack'

export class WithAnalytics extends Component {
    componentDidMount() {
      this.node.addEventListener('click', this.onClick);
      console.log('"With Analytics" component mounted')
    }
    componentDidUnMount() {
      this.node.removeEventListener('click')
    }
    componentDidUpdate(prevProps, prevState) {
      console.log('Route changed')
      Track('pageView', {'detail': { 'pageName': this.props.location.pathname }})
    }
    mapPropsToData(props) {
      return props
    }
    onClick = (event) => {
      if (event.target.tagName.toLowerCase() === 'a') { // Naive check for <a> elements
        const data = this.mapPropsToData(this.props)
        Track('linkClick', {'link clicked': data})
        console.log('Click link!')
      }
      if (event.target.tagName.toLowerCase() === 'button') { // Naive check for <button> elements
        const data = this.mapPropsToData(this.props)
        Track('buttonClick', {'link clicked': data})
        console.log('Click button!')
      }
    }
    render() {
      return (
        <div ref={node => { this.node = node; }}>
          {this.props.children}
        </div>
        )
    }
  }

export default withRouter(WithAnalytics)
