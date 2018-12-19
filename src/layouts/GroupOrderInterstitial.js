import React from 'react'
import { Centre, Caterpillar } from './../containers/_Common'

const GroupOrderInterstitial = (props) => {
  let orderRef = props.match.params.id
  return (
    <main id="main">
      <div className="grid-container">
        <Centre>
          <h3 className="margin-top-30">We've found your order, we're now finding the status.</h3>
        </Centre>
        <Centre><Caterpillar /></Centre>
        <br />
      </div>
    </main>       
  )
}

export default GroupOrderInterstitial
