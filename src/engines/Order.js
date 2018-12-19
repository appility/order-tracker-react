/*
*
* Inference engine
*
*/

/* Following the fetch of Order Item details  
   we must augment each Order Item object
   */

export function ReturnAugmentedOrderItem(orderItems, orderItemDetail) {
	let OrderItemReference = orderItemDetail.ProductSummary.OrderItemReference
	orderItems.forEach(function (item, index) {
		if (OrderItemReference === item.OrderItemReference) {
			Object.assign(orderItems[index], orderItemDetail)
		}
	})
	return orderItems
}



function hasEngineerAppointment (item, index, array) {
	if (item.EngineeringAppointmentDate && item.EngineeringAppointmentDate !== null ){
		return item;
	}
}

const isBundleItem = (item) => {
 return (item.ProductIcon === 'bundleIcon')
}

export function GetOrderItemsWithEngineerAppointment (data) {
	return data.filter(hasEngineerAppointment)
}

export function CheckIfBundleOrder (orderItems) {
	return orderItems.some(isBundleItem)
}

/***/

const deriveActivities = (data) => {
	let engineerAppointments = GetOrderItemsWithEngineerAppointment(data.Products)
	return { EngineerAppointments: engineerAppointments };
}

const calculateTotals = (products) => {
  let totalMonthlyPrice = calculateTotal(products, 'MonthlyPrice')
  let totalOneOffPrice = calculateTotal(products, 'OneOffPrice')
  return {
    TotalMonthlyPrice: totalMonthlyPrice,
    TotalOneOffPrice: totalOneOffPrice
  }
}

const calculateTotal = (items, property) => { 
  return items.reduce(function(sum, item) { 
    return sum + item[property] 
  }, 0) 
}

export function TransformOrderData(data) {
	let totals = calculateTotals(data.Products) 
	let activities = deriveActivities(data) 
	let IsBundleOrder = CheckIfBundleOrder(data.Products) 
	return Object.assign(data, totals, activities, { IsBundleOrder: IsBundleOrder} )
}




