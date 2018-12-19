import React from 'react'
import OptionallyDisplayed from './../utils/OptionallyDisplayed.js'
import PhaseBanner from './../patterns/PhaseBanner'
import LinkWithIcon from './LinkWithIcon'

function isDebug() {
	return window.debug ? true : false
}

const Error = ({description, errorDebugging}) => (
	<main id="main">
		<PhaseBanner />
		<div className="grid-container">
			<LinkWithIcon
				to={{pathname: `/`}}
				className="margin-top-20" type="back">Back</LinkWithIcon>
  		<section role="alert" aria-live="assertive">
		    <h1 className="margin-top-30" tabIndex="0">Oops</h1>
		    <p tabIndex="0">Something has gone wrong, here's a description of the problem:</p>
		    <p tabIndex="0">{description}</p>
				<OptionallyDisplayed display={isDebug()}>
			    <pre>
			    	<code>
							{ errorDebugging && JSON.stringify(errorDebugging, null, 2) }
						</code>
					</pre>
				</OptionallyDisplayed>
		  </section>
		</div>
	</main>
)

export default Error
