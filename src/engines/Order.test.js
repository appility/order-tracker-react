
import React from 'react';
import ReactDOM from 'react-dom';
import { 
      GetOrderItemsWithEngineerAppointment,
      CheckIfBundleOrder,
      calculateTotals,
      deriveActivities
    } from './Order'

it('GetOrderItemsWithEngineerAppointment should return items with engineering appointment', () => {
  let items = [
  	{ EngineeringAppointmentDate: '21/10/2018',
      EngineeringAppointmentSlot: ""},
  	{ EngineeringAppointmentDate: '21/10/2018',
      EngineeringAppointmentSlot: ""}
  ]
  let result = GetOrderItemsWithEngineerAppointment(items)
  expect(result.length).toEqual(2)
});

it('GetOrderItemsWithEngineerAppointment should return ONE item with engineering appointment', () => {
  let items = [
    { EngineeringAppointmentDate: '21/10/2018',
      EngineeringAppointmentSlot: ""},
    {  EngineeringAppointmentDate: null,
      EngineeringAppointmentSlot: ""}
  ]
  let result = GetOrderItemsWithEngineerAppointment(items)
  expect(result.length).toEqual(1)
});

it('GetOrderItemsWithEngineerAppointment returns no items with engineering appointment', () => {
  let items = [
  	{ EngineeringAppointmentDate: null,
      EngineeringAppointmentSlot: ""},
  	{ IsDelayedOrder: false,
      IsPreAppointment: 0}
  ]
  let result  = GetOrderItemsWithEngineerAppointment(items)
  expect(result.length).toEqual(0)
});

it('CheckIfBundleOrder returns true if array of object contains Bundle item', () => {
  let items = [
    {ProductIcon: null},
    {ProductIcon: 'bundleIcon'}
  ]
  let result = CheckIfBundleOrder(items)
  expect(result).toEqual(true)
});

it('CheckIfBundleOrder returns true if array of object does not contain Bundle item', () => {
  let items = [
    {ProductIcon: null},
    {ProductIcon: false}
  ]
  let result = CheckIfBundleOrder(items)
  expect(result).toEqual(false)
});

it('CheckIfBundleOrder returns true if array of object does not contain Bundle item', () => {
  let items = [
    {RandomProperty: true},
    {RandomProperty: true}
  ]
  let result = CheckIfBundleOrder(items)
  expect(result).toEqual(false)
});



