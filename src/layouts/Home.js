import React from "react"
import PhaseBanner from './../patterns/PhaseBanner'
import OrderReferenceForm from "./../patterns/OrderReferenceForm"

const Home = ( props ) => (
  <main id="main">
    <PhaseBanner /> 
    <div className="grid-container">
      <h1 className="margin-top-30">View Order Status</h1>
    </div>
    <div className="grid-container margin-top-60">
      <h2 className="h4">Track a single order</h2>
      <hr />
      <p>View all of the important details from your order by entering your order reference number and postcode.</p>
      <OrderReferenceForm { ...props} 
        buttonText="View order status"
        />
    </div>
    <br />
    <br />
  </main>
)

export default Home
