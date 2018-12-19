
import { ReturnMostDistantFutureDate }from './../utils/Date'
/*
*
* Engine
*
*/

/*
 *  Following the fetch of Group Order we fetch multiple Orders
 *  we must merge them to resemble a Standard Order response
*/

const statuses = [
  'Pending',
  'Open',
  'In Progress',
  'Cancelled',
  'Delayed',
  'Completed'
  ]

export function MergeMultipleOrders(orders) {
  let baseOrder = orders[0]
  baseOrder.Products = concatOrderItems(orders)
  baseOrder.OrderMetaInfo = normaliseMetaInfo(orders)
  return baseOrder
}

function concatOrderItems (orders) {
  let combinedOrderItems = []
  orders.forEach(function (order, index) {
    if (order.Products) {
      combinedOrderItems.push(...order.Products)
    }
  })
  return combinedOrderItems
}

function normaliseMetaInfo(orders) {
  let baseMetaInfo = orders[0].OrderMetaInfo
  baseMetaInfo.GrouperOrderId = null
  baseMetaInfo.OrderStatus = returnMinimumOrderStatus(orders)
  baseMetaInfo.EstimatedCompletionDate = returnMaximumOrderCompletionDate(orders)
  return baseMetaInfo
}

function returnMinimumOrderStatus(orders) {
  let numericStatuses = []
  orders.forEach(function (order, index) {
    if (order.OrderMetaInfo && order.OrderMetaInfo.OrderStatus) {
      numericStatuses.push(statuses.indexOf(order.OrderMetaInfo.OrderStatus))
    }
  })
  return statuses[Math.min.apply(null, numericStatuses)]
}

function returnMaximumOrderCompletionDate(orders) {
  let dates = []
  orders.forEach(function (order, index) {
    if (order.OrderMetaInfo && order.OrderMetaInfo.EstimatedCompletionDate) {
      dates.push(order.OrderMetaInfo.EstimatedCompletionDate)
    }
  })
  if ( dates.length === 1 ) {
    return dates[0]
  }
  return ReturnMostDistantFutureDate(dates)
}
