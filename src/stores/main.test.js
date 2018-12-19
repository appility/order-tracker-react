
/* Application files */
import Store from './main.js'

describe('saveGroupOrder', () => {
  it('saveGroupOrder adds object to the group order property', () => {
    let id = 1
    let state = {}
    Store.saveGroupOrder(id, state)
    expect(Store.getGroupOrderById(id)).toEqual(state)
  })

  it('saveGroupOrder adding another object to the group order property in succession', () => {
    let id = 1
    let state = {name: 'Hestia'}
    Store.saveGroupOrder(id, state)
    let anotherId = 2
    let anotherState = {name: 'Poseidon'}
    Store.saveGroupOrder(anotherId, anotherState)
    expect(Store.getGroupOrderById(1)).toEqual(state)
    expect(Store.getGroupOrderById(2)).toEqual(anotherState)
  })

  it('saveGroupOrder adding object with same id as previous, overwrites previous', () => {
    let id = 1
    let state = {name: 'Hestia'}
    let anotherState = {name: 'Hephaestus'}
    Store.saveGroupOrder(id, state)
    Store.saveGroupOrder(id, anotherState)
    expect(Store.getGroupOrderById(id)).toEqual(anotherState)
  });
})

describe('saveOrderSummary', () => {
  it('saveOrderSummary adds object to the order summary property', () => {
    let id = 1
    let state = {}
    Store.saveOrderSummary(id, state)
    expect(Store.getOrderSummaryById(id)).toEqual(state)
  })

  it('saveOrderSummary adding another object to the order summary property in succession', () => {
    let id = 1
    let state = {name: 'Hestia'}
    Store.saveOrderSummary(id, state)
    let anotherId = 2
    let anotherState = {name: 'Athena'}
    Store.saveOrderSummary(anotherId, anotherState)
    expect(Store.getOrderSummaryById(1)).toEqual(state)
    expect(Store.getOrderSummaryById(2)).toEqual(anotherState)
  })

  it('saveOrderSummary adding object with same id as previous, overwrites previous', () => {
    let id = 1
    let state = {name: 'Hestia'}
    let anotherState = {name: 'Demeter'}
    Store.saveOrderSummary(id, state)
    Store.saveOrderSummary(id, anotherState)
    expect(Store.getOrderSummaryById(id)).toEqual(anotherState)
  })

  it('saveOrderSummary leaves groupOrder untouched', () => {
    let GroupOrderState = {name: 'Hestia'}
    Store.saveGroupOrder(8, GroupOrderState)
    let id = 1
    let state = {name: 'Hestia'}
    let anotherState = {name: 'Demeter'}
    Store.saveOrderSummary(id, state)
    Store.saveOrderSummary(id, anotherState)
    expect(Store.getOrderSummaryById(id)).toEqual(anotherState)
    expect(Store.getGroupOrderById(8)).toEqual(GroupOrderState)
  })
})

describe('saveOrderItem', () => {
  it('saveOrderItem adds object to the order item property', () => {
    let id = 1
    let state = {}
    Store.saveOrderItem(id, state)
    expect(Store.getOrderItemById(id)).toEqual(state)
  })

  it('saveOrderSummary adding another object to the order item property in succession', () => {
    let id = 1
    let state = {name: 'Hestia'}
    Store.saveOrderItem(id, state)
    let anotherId = 2
    let anotherState = {name: 'Athena'}
    Store.saveOrderItem(anotherId, anotherState)
    expect(Store.getOrderItemById(1)).toEqual(state)
    expect(Store.getOrderItemById(2)).toEqual(anotherState)
  })

  it('saveOrderItem adding object with same id as previous, overwrites previous', () => {
    let id = 1
    let state = {name: 'Hestia'}
    let anotherState = {name: 'Demeter'}
    Store.saveOrderItem(id, state)
    Store.saveOrderItem(id, anotherState)
    expect(Store.getOrderItemById(id)).toEqual(anotherState)
  })
  
  it('saveOrderItem leaves groupOrder and orderSummary untouched', () => {
    let GroupOrderState = {name: 'Hestia'}
    Store.saveGroupOrder(8, GroupOrderState)
    let OrderState = {name: 'Hestia'}
    Store.saveOrderSummary(8, GroupOrderState)

    let id = 1
    let state = {name: 'Hestia'}
    Store.saveOrderItem(id, state)

    expect(Store.getOrderItemById(1)).toEqual(state)
    expect(Store.getOrderSummaryById(8)).toEqual(OrderState)
    expect(Store.getGroupOrderById(8)).toEqual(GroupOrderState)
  })
})


describe('deleteOrderSummaryById', () => {
  it('deleteOrderSummaryById object to the order summary property', () => {
    let id = 1
    let state = {random: 'stuff'}
    Store.saveOrderSummary(id, state)
    Store.deleteOrderSummaryById(1)
    expect(Store.getOrderSummaryById(id)).toEqual(null)
  })
})
