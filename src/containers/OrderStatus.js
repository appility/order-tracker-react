
import React, { Component } from 'react'
import Store from './../stores/main.js'
import { isGroupOrder, JsonPathToValue, Trim, ReturnCustomHeaders, ReturnApiHost } from './../utils/Core'
import { ReturnFriendlyErrorMessage } from './../utils/Text'
import { GetOrderItemsWithEngineerAppointment, CheckIfBundleOrder } from './../engines/Order'
import { TransformOrderData, ReturnAugmentedOrderItem } from './../engines/Order'
import { TransformOrderItemData } from './../engines/OrderItem'
import {
  FetchJSON,
  Centre,
  ErrorComponent,
  Caterpillar
} from './_Common'
import OrderStatusLayout from './../layouts/OrderStatus'

const API_HOST = ReturnApiHost()
const API_ENDPOINT = "/orders/"
const DATA_PATH = "result"

export default class OrderStatus extends Component {

  constructor(props) {
    super(props);
    this._isMounted = false;
    this.params = {}
    this.orderItemIDs = []
    this.state = {
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

  returnAPIUrl () {
    return API_HOST + API_ENDPOINT + Trim(this.props.match.params.id) + '?postCode=' + Trim(this.props.match.params.postcode)
  }

  returnAPIUrlForItem (item) {
    return API_HOST
    + API_ENDPOINT 
    + Trim(item.OrderKey) 
    + '/' + Trim(item.OrderItemReference) 
    + '?postCode=' + Trim(this.props.match.params.postcode)
  }

  setCustomHeaders() {
    return this.customHeaders = ReturnCustomHeaders()
  }

  componentDidMount() {
    this._isMounted = true // has component been unmounted
    this.params = this.props.match.params // handle empty
    let id = Trim(this.params.id)
    let state = Store.getOrderSummaryById(id) // does state exist
    if (state) {
      this.setState(state, () => {
        this.fetchOrderItemsData(this.state.data)
      })
    return
    }
    this.fetchData()
  }

  areChildrenRequired() {
    return (this.state.data && this.state.data.BillingDetails)
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  fetchData() {
    let url = this.returnAPIUrl()
    let customHeaders = this.setCustomHeaders()

    FetchJSON(url, customHeaders)
      .then(
        (response) => {
          if(!response) { 
            let message = ReturnFriendlyErrorMessage('FiveHundred')
            throw Error({message: message})
          }
          if(!response.isSuccess) {
            throw Error(response.errorMessage)
          }
          return JsonPathToValue(response, DATA_PATH)
        },
        (error) => {
          throw Error(error)
        }
      )
      .then(data => {
        this.onFetch(data)
        return data
      })
      .then(data => {
        return this.fetchOrderItemsData(data)
      })
      .catch(error => {
        // render console.log
        // or just BillingDetails.error = true
        this.handleError(error.message)
      })    
  }

  fetchOrderItemsData(data) {
    let promises = []
      data.Products.forEach(function(item) {
        let url = this.returnAPIUrlForItem(item)
        let customHeaders = this.setCustomHeaders()
        let request = FetchJSON(url, customHeaders)
                      .then(function(response){ 
                        if (response.isSuccess) {
                          return JsonPathToValue(response, DATA_PATH)
                        }
                      })
                      .catch(error => {
                        //this.handleError(error.message)//silent?
                      })
        if(request) promises.push(request) 
      }, this)

    Promise.all(promises)
    .then((items) => {
      this.onItemsFetchComplete(items)
    })
    .catch(error => {
      //silent?
      this.handleError(error.message)
    })
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

  onFetch (data) { 
    if (!this._isMounted) return
    this.setState({
      isLoaded: true,
      data: TransformOrderData(data)
    }, () => {
      this.saveStateToStore()
    })
  }

  onItemsFetchComplete(items) {
    items.forEach(function(item) {
      if(item) {
        this.onItemFetch(item)
      }
    }, this)
    debugger
    // now add Carrier Tracking object to any Product Object that needs it
  }

  onItemFetch (itemData) { 
    if (!this._isMounted) return
    let tempData = this.state.data
    let augmentedProducts = ReturnAugmentedOrderItem(tempData.Products, itemData)
    Object.assign(
      tempData, 
      { BillingDetails: this.returnBillingDetails(itemData) },
      { Products: augmentedProducts },
      { Activities: [] }
    )
    this.setState({
      data: tempData
    })
  }

  saveStateToStore () {
    if (this.state.data) {
      let id = Trim(this.props.match.params.id)
      Store.saveOrderSummary(id, this.state)
    }
  }

  deriveActivities (data) {
    let engineerAppointments = GetOrderItemsWithEngineerAppointment(data.Products)
    return { EngineerAppointments: engineerAppointments };
  }

  deriveActivitiesFromOrderItem (data) {
    let engineerAppointments = GetOrderItemsWithEngineerAppointment(data.Products)
    return { EngineerAppointments: engineerAppointments };
  }

  calculateTotals (products) {
    let totalMonthlyPrice = this.calculateTotal(products, 'MonthlyPrice')
    let totalOneOffPrice = this.calculateTotal(products, 'OneOffPrice')
    return {
      TotalMonthlyPrice: totalMonthlyPrice,
      TotalOneOffPrice: totalOneOffPrice
    }
  }

  calculateTotal (items, property) { 
    return items.reduce(function(sum, item) { 
      return sum + item[property] 
    }, 0) 
  }

  returnBillingDetails (data) { 
    return JsonPathToValue(data, 'BillingDetails')
  }

  augmentOrderItem () {
    // OrderItemReference: "BT5PZ4T91-32
  }

  triggerFetch () {
    this.setState({ 
      errorHeadline: null,
      errorDescription: null,
      isLoaded: false,
      data: null
    })
    this.invalidateStore()

    if (isGroupOrder(this.props.match.params.id)) {
      this.fetchOrderItemsData(this.state.data)
    } else {
      this.fetchData()
    }
  }

  invalidateStore = () => {
    Store.deleteOrderSummaryById(this.props.id)
  }

  render() {
    const { isLoaded, data, errorDescription, errorDebugging } = this.state
    if (errorDescription) {
      return  <ErrorComponent 
                description={errorDescription} 
                errorDebugging={errorDebugging} 
              />
    } else if (!isLoaded) {
      return <Centre><Caterpillar /></Centre>;
    } else {
      return <OrderStatusLayout 
              {...data} 
              {...this.props} 
              triggerFetch = {this.triggerFetch}
              />
    }
  }
}
