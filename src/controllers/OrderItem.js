import React, { Component } from 'react';
import PropTypes from 'prop-types'
import OrderItemContainer from './../containers/OrderItem'

export default class OrderItemController extends Component {
  constructor(props){
    super(props)
    document.title = 'My Order Item'
  }

  render() {
    return <OrderItemContainer {...this.props} />
  }
}

OrderItemController.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      itemId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
