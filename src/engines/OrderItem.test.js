
import React from 'react';
import ReactDOM from 'react-dom';
import { 
  IsFreeService, 
  ReturnItemsWithNoCharge, 
  ReturnItemsWithCharge, 
  TransformOrderItemData
} from './OrderItem.js';

/* isFreeService */

it('IsFreeService should return correct boolean - scenario 1', () => {
  let item = { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    }
  let result = IsFreeService(item)
  expect(result).toEqual(true)
});

it('IsFreeService should return false - scenario 2', () => {
  let item = { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 3
    }
  let result = IsFreeService(item)
  expect(result).toEqual(false)
});

it('IsFreeService should return false - scenario 3', () => {
  let item = { 
      OneOffPrice : 1,
      MonthlyPrice: 1,
      QuarterlyPrice: 3
    }
  let result = IsFreeService(item)
  expect(result).toEqual(false)
});

/* returnItemsWithNoCharge */

it('ReturnItemsWithNoCharge should return array of items which are free', () => {
  let items = [
    { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    },
    { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0.1
    },
    { 
      OneOffPrice : 1,
      MonthlyPrice: 2,
      QuarterlyPrice: 3
    }
  ]
  let result = ReturnItemsWithNoCharge(items)
  expect(result.length).toEqual(1)
});

it('ReturnItemsWithNoCharge should return array of items which are free', () => {
  let items = [
    { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    },
    { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0.0
    },
    { 
      OneOffPrice : 1,
      MonthlyPrice: 2,
      QuarterlyPrice: 3
    }
  ]
  let result = ReturnItemsWithNoCharge(items)
  expect(result.length).toEqual(2)
});

it('ReturnItemsWithNoCharge should return empty array of items which are free', () => {
  let items = [
    { 
      OneOffPrice : 1,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    },
    { 
      OneOffPrice : 32.0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    }
  ]
  let result = ReturnItemsWithNoCharge(items)
  expect(result.length).toEqual(0)
});


it('ReturnItemsWithNoCharge should return empty array of items which have no charge', () => {
  let items = [
    { 
      DisplayName: "Unlimited Wi-Fi",
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    },
    { 
      DisplayName: "Some item with one off price",
      OneOffPrice : 32.0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    }
  ]
  let result = ReturnItemsWithNoCharge(items)
  expect(result[0].DisplayName).toEqual('Unlimited Wi-Fi')
});

it('ReturnItemsWithNoCharge should return empty array of items which have no charge', () => {
  let items = [
    { 
      DisplayName: "Wi-Fi comes at a price",
      OneOffPrice : 0.0,
      MonthlyPrice: 12.0,
      QuarterlyPrice: 0
    },
    { 
      DisplayName: "Some item with one off price",
      OneOffPrice : 32.0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    }
  ]
  let result = ReturnItemsWithNoCharge(items)
  expect(result.length).toEqual(0)
});


/* returnItemsWithCharge */

it('ReturnItemsWithCharge should return array of items which have charge', () => {
  let items = [
    { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    },
    { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0.1
    },
    { 
      OneOffPrice : 1,
      MonthlyPrice: 2,
      QuarterlyPrice: 3
    }
  ]
  let result = ReturnItemsWithCharge(items)
  expect(result.length).toEqual(2)
});

it('ReturnItemsWithCharge should return array of items which have charge', () => {
  let items = [
    { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    },
    { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    },
    { 
      OneOffPrice : 0,
      MonthlyPrice: 0,
      QuarterlyPrice: 0
    }
  ]
  let result = ReturnItemsWithCharge(items)
  expect(result.length).toEqual(0)
});

/* transformOrderItemData */

it('TransformOrderItemData should return transformed data', () => {
  let data = {
    ProductOrderItems: {
      OrderItems: [{ 
        OneOffPrice : 10.2,
        MonthlyPrice: 0,
        QuarterlyPrice: 0
      },
      { 
        OneOffPrice : 0,
        MonthlyPrice: 18.99,
        QuarterlyPrice: 0
      },
      { 
        DisplayName: 'This is free, gratis',
        OneOffPrice : 0.0,
        MonthlyPrice: 0.0,
        QuarterlyPrice: 0.0
      }]
    }
  }
  let result = TransformOrderItemData(data)
  expect(result.ProductOrderItems.OrderItemsWithCharge.length).toEqual(2)
  expect(result.ProductOrderItems.OrderItemsWithNoCharge.length).toEqual(1)
  expect(result.ProductOrderItems.OrderItemsWithNoCharge[0].DisplayName).toEqual('This is free, gratis')
});

