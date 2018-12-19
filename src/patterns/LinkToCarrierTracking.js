import React from "react"
import PropTypes from 'prop-types'

const { func } = PropTypes

const returnLink = (TrackingReferenceUrl) =>  {
  return `<a href='${TrackingReferenceUrl}' target='_blank' class='link'>Track your package</a>`
}

const LinkToCarrierTracking = (props) => {
  let {
    TrackingReferenceUrl
  } = props[0]
  
  return (
    <span dangerouslySetInnerHTML={{__html: returnLink(TrackingReferenceUrl)}} />
    )
}

export default LinkToCarrierTracking

LinkToCarrierTracking.propTypes = {
  props: func
}

LinkToCarrierTracking.defaultProps = {
  props: func
}
