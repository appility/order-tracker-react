
function returnClientId() 
{ 
  let env = process.env.NODE_ENV
  let clientid = process.env.REACT_APP_APIGW_Client_Id
  switch (env) {
    case 'production': 
      clientid = process.env.REACT_APP_APIGW_Client_Id
      break
    case 'development': 
      clientid = process.env.REACT_APP_APIGW_Client_Id
      break
    case 'testapi': 
      clientid = process.env.REACT_APP_APIGW_Client_Id_TEST
      break
    }
  return clientid
}

/*
* In place of _lodash/_omit, which is 9Kb
*/
export function _omit(obj, omitKeys) {
  const result = {}
  Object.keys(obj).forEach(key => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key]
    }
  })
  return result
}
/**
 * 
 * 
 */
export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

/**
 * 
 * 
 */
export function isValidPostcode(string) {
  let regex = RegExp('^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$')
  return regex.test(string)
}


/**
 * 
 * 
 */
export function FormatPrice(number) {
  if (isNumeric(number)) {
    return parseFloat(number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }
  return null
}

/**
 * Loads a script file.
 * 
 * @param {string} path to file
 * @returns Promise, resolved on script load
 */

export function LoadScript(src) {
  return new Promise(function(resolve, reject){
    let script = document.createElement('script')
    script.src = src
    script.addEventListener('load', function () {
      resolve()
    });
    script.addEventListener('error', function (e) {
      reject(e)
    });
    document.body.appendChild(script)
  })
}

/**
 * Converts a string path to a value that is existing in a json object.
 * 
 * @param {Object} jsonData Json data to use for searching the value.
 * @param {Object} path the path to use to find the value.
 * @returns {valueOfThePath|undefined}
 */
export function JsonPathToValue(jsonData, path) {
  if (!(jsonData instanceof Object) || typeof (path) === "undefined") {
    let error = "Not valid argument:jsonData:" + jsonData + ", path:" + path;
    console.log(error)//throw new Error(error);
    return null
  }
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  path = path.replace(/^\./, ''); // strip a leading dot
  let pathArray = path.split('.');
  for (let i = 0, n = pathArray.length; i < n; ++i) {
      let key = pathArray[i];
      if (key in jsonData) {
          if (jsonData[key] !== null) {
              jsonData = jsonData[key];
          } else {
              return null
          }
      } else {
          return null
      }
  }
  return jsonData
}

/**
 * 
 * 
 */
export function Trim(string) {
  return (string) ? string.trim() : ''
}

/**
 * 
 * 
 */
export function RemoveWhitespace(string) {
   return (string) ? string.replace(/\s+/g, '') : ''
}

/**
 * 
 * 
 */
export function stringStartsWith(str, prefix) {
  return str.indexOf(prefix) === 0
}

/**
 * 
 * 
 */
export function isGroupOrder(str) {
  return stringStartsWith(str, 'G')
}
/**
 * 
 * 
 */
export function isArray(array) {
  return ( array && array.length ) ? true : false
}

/**
 * 
 * 
 */
export function RemoveBrackets(string) {
  return string.replace(/[()]/g, '')
}

/**
 * Given an array of objects and a property to compare
 * returns a unique array of objects
 * e.g.
 * let arr = [{a:'Fred', b:3}, {a:'Mark', b:4}, {a:'Fred', b:4}]
 * RemoveObjectsWithDuplicateProperty(arr, 'a')
 * returns  [{a:'Fred', b:3}, {a:'Mark', b:4}]
 */
export function RemoveObjectsWithDuplicateProperty(arr, propertyName) {
  return arr.reduce(function (p, c) {
    if (!p.some(function (el) { 
      return (c[propertyName] && el[propertyName] === c[propertyName])
    })) p.push(c)
      return p
    }, [])
  }

/**
 *
 */

let generateTrackingId = function () {
  var S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
  }
  return ("omega-order-tracker-" + S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
}

/**
 *
 */

export function ReturnCustomHeaders() {
  let trackingId = generateTrackingId()
  return {
    'APIGW-Client-Id': returnClientId(),
    'APIGW-Tracking-Header': trackingId,
    'content-type': 'application/json'
  }
}

/**
 *
 */

export function ReturnApiHost() {
  let env = process.env.NODE_ENV
  let host = process.env.REACT_APP_API_HOST_PRODUCTION
  switch (env) {
    case 'production': 
      host = process.env.REACT_APP_API_HOST_PRODUCTION
      break
    case 'development': 
      host = process.env.REACT_APP_API_HOST_PRODUCTION
      break
    case 'test': 
      host = process.env.REACT_APP_API_HOST_MOCK
      break
    case 'testapi': 
      host = process.env.REACT_APP_API_HOST_TEST
      break
    default:
      host = process.env.REACT_APP_API_HOST_PRODUCTION
    }
  return host
}

/**
 *
 */

export function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

/**
 *
 */

export function Debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
