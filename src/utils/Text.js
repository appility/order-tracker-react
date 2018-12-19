/**
 * 
 * 
 */

export function ReturnFriendlyErrorMessage(key) {
  let messages = {
  	"Order not found": "Sorry, we didn't recognise that order reference.",
  	"Unsupported Order": "Sorry, we didn't recognise that order reference.",
  	"FiveHundred": "We're sorry, we can't access order information just now. Please refresh your browser or try again later.",
    "Error: Error": "We're sorry, we can't access order information just now. Please refresh your browser or try again later.",
    'SyntaxError: Unexpected token < in JSON at position 0': "We're sorry, we can't access order information just now. Please refresh your browser or try again later.",
    'Failed to fetch': "It doesn't look like you have an internet connection. Please check your connection and try again.",
    'TypeError: Failed to fetch': "We're sorry, we can't access order information just now, please go back and try again."
  }
  return messages[key] ? messages[key] : "We're sorry, something went wrong. Please refresh your browser or try again later."
}














/*


Request URL: https://api.ee.co.uk/bt-business/v1/orders/BT5998ZQ/BN26BP?postCode=
Request Method: GET
Status Code: 400 Bad Request


Validation

400 25 Missing header: APIGW-Tracking-Header

The mandatory APIGW-Tracking-Header is missing in the request header

Validation  401 40  Missing credentials This error is thrown when APIGW-Client-Id is missing.
Validation  401 41  Invalid credentials This error is thrown when APIGW-Client-Id is invalid
Validation  403 50  Access denied When the APIGW-Client-Id passed in the request header is not authorized to access this resource
Validation

403

53

Too many requests

When the rate limit threshold is crossed

Validation

400

20

Invalid URL parameter value: orderId

When the orderId parameter does not conform to the agreed standard

Technical

500

01

Internal Error

When an unknown error encountered

Technical

500

-

Server Down

*/