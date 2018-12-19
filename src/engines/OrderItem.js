
import { 
  JsonPathToValue, 
  Trim, 
  ReturnCustomHeaders, 
  RemoveObjectsWithDuplicateProperty
} from './../utils/Core'

const IsFreeService = (item) => {
    return ( item.OneOffPrice === 0 && item.MonthlyPrice === 0 && item.QuarterlyPrice === 0 )
  }

const ReturnItemsWithNoCharge = (items) => {
    return items.filter((item) => {
      return IsFreeService(item)
    })
  }

const ReturnItemsWithCharge = (items)  => {
    return items.filter((item) => {
      return !IsFreeService(item)
    })
  }

const TransformOrderItemData = (data) => {
    let uniqueOrderItems = RemoveObjectsWithDuplicateProperty(data.ProductOrderItems.OrderItems, 'DisplayName')
    let OrderItemsWithCharge = ReturnItemsWithCharge(uniqueOrderItems)
    let OrderItemsWithNoCharge = ReturnItemsWithNoCharge(uniqueOrderItems)
    data.ProductOrderItems.OrderItemsWithCharge = OrderItemsWithCharge // new object
    data.ProductOrderItems.OrderItemsWithNoCharge = OrderItemsWithNoCharge // new object 
    return data
}

export {
  IsFreeService,
  ReturnItemsWithNoCharge,
  ReturnItemsWithCharge,
  TransformOrderItemData
}
