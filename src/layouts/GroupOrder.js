import React from 'react'
import PhaseBanner from './../patterns/PhaseBanner'
import LinkWithIcon from './../modules/LinkWithIcon'
import GroupOrdersList from './../patterns/GroupOrdersListView'
import Chat from './../patterns/Chat'

const GroupOrder = (props) => {
  let orderRef = props.match.params.id
  return (
    <main id="main">
      <PhaseBanner orderRef={orderRef} /> 
      <div className="grid-container">
        <LinkWithIcon
          to={{pathname: `/`}}
          className="margin-top-20 block"
          type="back">Track another order</LinkWithIcon>
        <h1 className="margin-top-30">View Group Order</h1>
        <br />
        <div className="grid-x grid-padding-x">
          <div className="cell large-12">
            <GroupOrdersList { ...props} />
          </div>
        </div>
      </div>
      <Chat orderRef={orderRef} />
      <br />
      <br />
      <br />
    </main>       
  )
}

export default GroupOrder
