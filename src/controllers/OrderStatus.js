import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isGroupOrder } from './../utils/Core'
import ErrorComponent from './../modules/Error'
import OrderStatusContainer from './../containers/OrderStatus'
import GroupOrderContainer from './../containers/GroupOrder'

export default class OrderController extends Component {
  constructor(props){
    super(props)
    document.title = 'My Order'
  }

  render() {
    const { id } = (
      this.props && 
      this.props.match && 
      this.props.match.params) ? this.props.match.params : null
    if (!id) {
      return  <ErrorComponent description='No order reference supplied'/>;
    } else if (isGroupOrder(id)) {
      return <GroupOrderContainer {...this.props} />
    } else {
      return <OrderStatusContainer {...this.props} />
    }
  }
}

OrderController.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

