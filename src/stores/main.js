
let o = {}
  o['groupOrders'] = []
  o['orderSummaries'] = []
  o['orderItems'] = []

const Store = {
  saveGroupOrder: function(id, state) {
    o['groupOrders'][id] = state
  },
  getGroupOrderById: function(id) {
    return o['groupOrders'][id]
  },
  saveOrderSummary: function(id, state) {
    o['orderSummaries'][id] = state
  },
  getOrderSummaryById: function(id) {
    return o['orderSummaries'][id]
  },
  deleteOrderSummaryById: function(id) {
    if ( o['orderSummaries'][id] ) {
      delete o['orderSummaries'][id]
    }
  },
  saveOrderItem: function(id, state) {
    o['orderItems'][id] = state
  },
  getOrderItemById: function(id) {
    return o['orderItems'][id]
  },
  deleteOrderItemById: function(id) {
    if ( o['orderItems'][id] ) {
      delete o['orderItems'][id]
    }
  },
}   

export default Store
