import React from 'react';
import ReactDOM from 'react-dom';
import {isEmpty, isValidPostcode, isInvalidPostcode} from './Validations';

it('isEmpty returns expected result - when empty', () => {
  let result = isEmpty('    ')
  expect(result).toEqual(true)
})

it('isEmpty returns expected result - when not empty', () => {
  let result = isEmpty('SE22*UG')
  expect(result).toEqual(false)
})

it('isValidPostcodereturns expected result - when valid', () => {
  let result2 = isValidPostcode('SE228UG')
  expect(result2).toEqual(true)
})

it('isValidPostcode returns expected result - when invalid', () => {
  let result = isValidPostcode('SE228U3')
  expect(result).toEqual(false)
})

it('isInvalidPostcode returns expected result - when valid', () => {
  let result = isInvalidPostcode('SE228UG')
  expect(result).toEqual(false)
})

it('isInvalidPostcode returns expected result - when invalid', () => {
  let result = isInvalidPostcode('SE2UG7')
  expect(result).toEqual(true)
})
