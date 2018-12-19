
import React, { Component } from 'react'
import Store from './../stores/main.js'
import { TransformOrderItemData } from './../engines/OrderItem'
import { ReturnFriendlyErrorMessage } from './../utils/Text';
import { 
  JsonPathToValue, 
  Trim, 
  ReturnCustomHeaders
} from './../utils/Core';
import {
  FetchJSON,
  Centre,
  ErrorComponent,
  Caterpillar
} from './_Common';
import OrderItemLayout from './../layouts/OrderItem';

const API_HOST = process.env.NODE_ENV === 'test' ? process.env.REACT_APP_API_HOST_TEST : process.env.REACT_APP_API_HOST_PRODUCTION
const API_ENDPOINT = "/orders/";
const DATA_PATH = "result";

export default class OrderItem extends Component {

  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      errorHeadline: null,
      errorDescription: null,
      isLoaded: false,
      data: null
    }
    this.triggerFetch = this.triggerFetch.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.triggerFetch()
    }
  }

  returnAPIUrl() {
    return API_HOST
      + API_ENDPOINT
      + Trim(this.props.match.params.id)
      + '/' + Trim(this.props.match.params.itemId)
      + '?postCode=' + Trim(this.props.match.params.postcode)
  }

  setCustomHeaders() {
    return this.customHeaders = ReturnCustomHeaders()
  }

  componentDidMount() {
    this._isMounted = true
    let state = Store.getOrderItemById(Trim(this.props.match.params.itemId))
    if (state) {
      this.setState(state)
      return
    }
    this.fetchData()
  }

  fetchData() {
    let url =  this.returnAPIUrl()
    let customHeaders = this.setCustomHeaders()

    FetchJSON(url, customHeaders)
      .then(
        (response) => {
          if(!response.isSuccess) {
            throw new Error(response.errorMessage)
          }
          if (!this._isMounted) return;
          return JsonPathToValue(response, DATA_PATH)
        },
        (error) => {
          throw new Error(error)
        })
      .then(data => {
        this.onFetch(data)
      })
      .catch(error => {
        this.handleError(error.message)
      })
  }

  onFetch (data) { 
    if (!this._isMounted) return 
    let transformedData = TransformOrderItemData(data) 
    this.setState({ 
      isLoaded: true, 
      data: transformedData 
    },() => {
      this.saveStateToStore()
    })
  }

  saveStateToStore () {
    if (this.state.data) {
      let orderItemReference = this.props.match.params.itemId
      Store.saveOrderItem(orderItemReference, this.state)
    }
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
    this._isMounted = false
  }

  triggerFetch () {
    this.setState({ 
      errorHeadline: null,
      errorDescription: null,
      isLoaded: false,
      data: null
    })
    this.invalidateStore()
    this.fetchData()
  }

  invalidateStore = () => {
    Store.deleteOrderItemById(this.props.match.params.itemId)
  }

  render() {
    const { isLoaded, data, errorDescription, errorDebugging } = this.state
    if (errorDescription) {
      return  <ErrorComponent 
                description={errorDescription} 
                errorDebugging={errorDebugging} 
              />
    } else if (!isLoaded) {
      return <Centre><Caterpillar /></Centre>
    } else {
      return <OrderItemLayout 
              {...this.props} 
              {...data} 
              triggerFetch = {this.triggerFetch} />
    }
  }
}
