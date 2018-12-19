import Moment from 'moment'

/*
*
* Typically format is 2017-01-20T13:00:00Z
* YYYY-MM-DDTHH:MM:SSZ
* yyyy-mm-dd time24 Z
*
*/
export function ReturnFriendlyDayCountMessage(days) {
  let messages = {
    '0': '<strong>today</strong>',
    '1': 'in <strong>' + Math.abs(days) + '</strong> day',
    'default' : 'in <strong>' + Math.abs(days) + '</strong> days'
  }
  return messages[days] ? messages[days] : messages['default']
}
/*
*
*
*/
export function ReturnFriendlyDayCount(fromdate, todate) {
  let dateToDiff = Moment(fromdate).startOf('day')
  let diffInDays = Moment(todate).startOf('day').diff(Moment(dateToDiff).startOf('day'), 'days')
  return ReturnFriendlyDayCountMessage(diffInDays)
}
/*
*
*
*/
export function ReturnFriendlyDayCountFromToday(todate) {
  let todaysdate = new Date().toDateString()
  return ReturnFriendlyDayCount(todaysdate, todate)
}
/*
*
*
*/
export function ReturnFormattedDate(date) {
  return Moment(date).format('DD MMMM YYYY')
}
/*
*
*
*/
export function IsValidDate(date) {
  return Moment(date).isValid()
}
/*
*
*
*/
export function IsDateInPast(date) {
  return Moment(new Date()).isAfter(date, 'day')
}

/*
*
*
*/
export function ReturnMostDistantFutureDate(currentDate, dates) {
  var futureDates = dates.map(function(date){
    return Moment(date)
  })
  Moment.max(futureDates)  
}

