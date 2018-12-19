let DEFER
let DEFERRED = []
if (window._satellite) {
  //DEFER = false
  window._satellite.domReady(function () {
    DEFER = false
    DEFERRED.forEach(function ({ eventType, tagData }) {
      return dispatchCustomEvent(eventType, tagData)
    })
  })
}
else {
  DEFER = true
}

let dispatchCustomEvent = function (eventType, tagData) {
  let addToCart = new CustomEvent('addToCart', {'detail': { 'product_id': '234234', 'quantity': 2 }})
  document.body.dispatchEvent(addToCart)
}

export function Track(eventType, tagData) {
  if (DEFER) {
    DEFERRED.push({ eventType: eventType, tagData: tagData });
  }
  else {
    dispatchCustomEvent(eventType, tagData);
  }
}