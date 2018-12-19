import React from 'react';
import ReactDOM from 'react-dom';
import Timemachine from 'timemachine';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { 
  ReturnFormattedDate, 
  ReturnFriendlyDayCount, 
  ReturnFriendlyDayCountFromToday, 
  IsValidDate, 
  IsDateInPast
} from './Date';

describe('utils/Date', () => {
  afterEach (function(){
    Timemachine.reset();
  });
  it('ReturnFriendlyDayCount returns correct string', () => {
    let fromDate = "2018-02-19T15:10:25Z"
    let toDate = "2018-02-19T15:10:25Z"
    let result = ReturnFriendlyDayCount(fromDate,toDate)
    expect(result).toEqual('<strong>today</strong>')
  });

  it('ReturnFriendlyDayCountFromToday returns correct string when day is 2 days away', () => {
    Timemachine.config({
      dateString: '2018-12-02T13:10:25Z'
    })
    let toDate = "2018-12-04T15:10:25Z"
    let result = ReturnFriendlyDayCountFromToday(toDate)
    expect(result).toEqual('in <strong>2</strong> days')
  });

  it('ReturnFriendlyDayCountFromToday returns correct string when day is 1 day away', () => {
    Timemachine.config({
      dateString: '2018-12-03T13:10:25Z'
    })
    let toDate = "2018-12-04T15:10:25Z"
    let result = ReturnFriendlyDayCountFromToday(toDate)
    expect(result).toEqual('in <strong>1</strong> day')
  });

  it('ReturnFriendlyDayCountFromToday returns correct string when when day is today', () => {
    Timemachine.config({
      dateString: '2018-12-04T13:10:25Z'
    })
    let toDate = "2018-12-04T15:10:25Z"
    let result = ReturnFriendlyDayCountFromToday(toDate)
    expect(result).toEqual('<strong>today</strong>')
  });

  it('ReturnFormattedDate returns correct string', () => {
    let date = "2050-02-19T15:10:25Z"
    let result = ReturnFormattedDate(date)
    expect(result).toEqual('19 February 2050')
  });

  it('ReturnFormattedDate returns correct string if date is in past', () => {
    let date = "2018-03-20T15:10:25Z"
    let result = ReturnFormattedDate(date)
    expect(result).toEqual('20 March 2018')
  });

  it('IsValidDate returns true if date is valid', () => {
    let date = "2018-0215:10:25Z"
    let result = IsValidDate(date)
    expect(result).toEqual(false)
  });

  it('IsValidDate returns true if date is empty string', () => {
    let date = ""
    let result = IsValidDate(date)
    expect(result).toEqual(false)
  });

  it('IsValidDate returns true if date is valid', () => {
    let date = "2018-02-19T15:10:25Z"
    let result = IsValidDate(date)
    expect(result).toEqual(true)
  });

  it('IsDateInPast returns true if date is in past', () => {
    let date = "2012-02-19T15:10:25Z"
    let result = IsDateInPast(date)
    expect(result).toEqual(true)
  });

  it('IsDateInPast returns false if date is in future', () => {
    let date = "2050-02-19T15:10:25Z"
    let result = IsDateInPast(date)
    expect(result).toEqual(false)
  });

  it('IsDateInPast returns false if date is today', () => {
    let date = "2018-02-19T15:10:25Z" // 
    let result = IsValidDate(date)
  });

});
