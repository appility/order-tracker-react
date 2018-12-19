
import React, { Component } from 'react'
import Store from './../stores/main.js'
import { JsonPathToValue, Trim, ReturnCustomHeaders } from './../utils/Core'
import { ReturnFriendlyErrorMessage } from './../utils/Text'
import {
  FetchJSON,
  Centre,
  ErrorComponent,
  Caterpillar
} from './_Common'
import { MergeMultipleOrders } from './../engines/GroupOrder'
import { TransformOrderData } from './../engines/Order'
import GroupOrderInterstitial from './../layouts/GroupOrderInterstitial'
import OrderStatusContainer from './../containers/OrderStatus'

const API_HOST = process.env.NODE_ENV === 'test' ? process.env.REACT_APP_API_HOST_TEST : process.env.REACT_APP_API_HOST_PRODUCTION
const API_ENDPOINT_GROUP_ORDER = "/group-orders/"
const API_ENDPOINT_ORDER = "/orders/"
const DATA_PATH_GROUP_ORDER = "result.Orders"
const DATA_PATH_ORDER = "result"

export default class GroupOrder extends Component {

  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      errorDescription: null,
      isLoaded: false,
      isChildrenLoaded: false,
      items: null
    }
  }

  returnAPIUrl() {
    //return '/data/groupOrder.json'
    return API_HOST 
      + API_ENDPOINT_GROUP_ORDER 
      + Trim(this.props.match.params.id)
  }

  returnAPIUrlForOrder(orderId) {
    return API_HOST 
      + API_ENDPOINT_ORDER
      + orderId
  }

  setCustomHeaders() {
    return this.customHeaders = ReturnCustomHeaders()
  }

  componentDidMount() {
    this._isMounted = true

    let id = Trim(this.props.match.params.id)

    let orderState = Store.getOrderSummaryById(id) // does combined order state exist
    if (orderState) {
      this.setState(orderState)
      return
    }

    let groupState = Store.getGroupOrderById(id) // does group order state exist
    if (groupState) {
      this.setState(groupState)
      return
    }

    let url = this.returnAPIUrl()
    let customHeaders = this.setCustomHeaders()

    FetchJSON(url, customHeaders)
      .then(
        (response) => {
          if(!response.isSuccess) {
            throw Error(response.errorMessage);
          }
          if (!this._isMounted) return;
          return JsonPathToValue(response, DATA_PATH_GROUP_ORDER)
        },
        (error) => {
          throw Error(error);
        }
      )
      .then(data => {
        this.onFetch(data)
        this.fetchChildren(data)
      })
      .catch(error => {
        this.handleError(error.message)
      })
  }

  onFetch (data) {
    if (!this._isMounted) return
    this.setState({
      isLoaded: true,
      items: data
    })
  }

  fetchChildren (data) {
    let promises = []
    data.forEach(function(item) {
      let url = this.returnAPIUrlForOrder(item.OrderNumber)
      let customHeaders = this.setCustomHeaders()
      let request = FetchJSON(url, customHeaders)
                    .then(function(response){ 
                      return JsonPathToValue(response, DATA_PATH_ORDER)
                    })
      promises.push(request)
    }, this)

    Promise.all(promises)
      .then((items) => {
        this.onChildrenFetchComplete(items)
      })
      .catch(error => {
        this.handleError(error.message)
      })
  }

  onChildrenFetchComplete(items) {
    let mergedOrder = MergeMultipleOrders(items)
    let orderData = TransformOrderData(mergedOrder)
    this.saveDataToStore(orderData)
  }

  saveDataToStore (orderData) {
    let id = Trim(this.props.match.params.id)
    let tempState = {
      isLoaded: true,
      isChildrenLoaded: true,
      data: orderData
    }
    Store.saveOrderSummary(id, tempState)
    this.setState(tempState)
  }

  handleError(error) {
    if (!this._isMounted) return
    let message = ReturnFriendlyErrorMessage(error)
    this.setState({ 
      isLoaded: true,
      errorDescription: message,
      errorDebugging: this.customHeaders
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { isLoaded, isChildrenLoaded, items, errorDescription, errorDebugging } = this.state
    console.log(isLoaded)
    console.log(isChildrenLoaded)
    if (errorDescription) {
      return  <ErrorComponent 
          description={errorDescription} 
          errorDebugging={errorDebugging} 
        />
    } else if (!isLoaded) {
      return <Centre><Caterpillar /></Centre>
    } else if (isChildrenLoaded) {
      return <OrderStatusContainer {...this.props} />
    } else {
      return <GroupOrderInterstitial {...this.props} items={items} />
    }
    
  }
}



