import React from "react"
import { Link } from "react-router-dom"
import Button from './../modules/Button.js'

const FourOhFour = ( {location} ) => (
<div className="grid-container">
  <h1>Sorry, we can't find that page</h1>
  <div className="grid-x grid-padding-x">
    <div className="cell">
      <h2 className="h4">Either the link is broken or we’ve removed it.</h2>
      <hr />
      <p>Return to the start page to get back on track.</p>
      <Link to="/">
        <Button text="Back to start"/>
      </Link>
    </div>
  </div>
</div>
);

export default FourOhFour