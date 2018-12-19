import React from 'react';
import ReactDOM from 'react-dom';
import {ReturnFriendlyErrorMessage} from './Text.js';

it('ReturnFriendlyErrorMessage function returns expected result - Order not found', () => {
  let result = ReturnFriendlyErrorMessage('Order not found')
  expect(result).toEqual("Sorry, we didn't recognise that order reference.")
})

it('ReturnFriendlyErrorMessage function returns expected result - Unsupported Order', () => {
  let result = ReturnFriendlyErrorMessage('Unsupported Order')
  expect(result).toEqual("Sorry, we didn't recognise that order reference.")
})

it('ReturnFriendlyErrorMessage function returns expected result - Error', () => {
  let result = ReturnFriendlyErrorMessage('Error: Error')
  expect(result).toEqual("We're sorry, we can't access order information just now. Please refresh your browser or try again later.")
})

it('ReturnFriendlyErrorMessage function returns expected result - Syntax error', () => {
  let result = ReturnFriendlyErrorMessage('SyntaxError: Unexpected token < in JSON at position 0')
  expect(result).toEqual("We're sorry, we can't access order information just now. Please refresh your browser or try again later.")
})

it('ReturnFriendlyErrorMessage function returns expected result - Failed to fetch', () => {
  let result = ReturnFriendlyErrorMessage('Failed to fetch')
  expect(result).toEqual("It doesn't look like you have an internet connection. Please check your connection and try again.")
})

it('ReturnFriendlyErrorMessage function returns expected result - Failed to fetch', () => {
  let result = ReturnFriendlyErrorMessage('Failed to fetch')
  expect(result).toEqual("It doesn't look like you have an internet connection. Please check your connection and try again.")
})

it('ReturnFriendlyErrorMessage function returns expected result - no match', () => {
  let result = ReturnFriendlyErrorMessage('random')
  expect(result).toEqual("We're sorry, something went wrong. Please refresh your browser or try again later.")
})
