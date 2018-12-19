import React from 'react'
import { RemoveBrackets }from './../utils/Core'
import { ReturnFormattedDate, IsDateInPast }from './../utils/Date'
import './MediaObject.css'
import Map from './../components/Map'

// media text

function MediaObject(props) {

	let text = {
		future: "You have a engineer appointment scheduled for",
		past: "You had a engineer appointment scheduled for"
	}
	
	return (
		<div className={ `media-object ` + props.className }>
		  <div className="media-object-section">
		  	{Graphic}
		  </div>
		  <div className="media-object-section main-section">

		    <ul className="features">
		    	<li>
		    		<h4 className="bold">{ReturnFormattedDate(EngineeringAppointmentDate)}, { RemoveBrackets(EngineeringAppointmentSlot) }</h4>
		    		<p>Openreach engineer apointment to upgrade your phone line.</p>
		    	</li>
		    	<li>
		    		<h4>Installation address</h4>
		    	</li>
		    	<li>
		    		<p>{IsDateInPast(EngineeringAppointmentDate) ? text['past'] : text['future']} <strong>{ReturnFormattedDate(EngineeringAppointmentDate)}</strong>,<br/>
		    	 	between <strong>{ RemoveBrackets(EngineeringAppointmentSlot) }</strong></p>
		    	</li>
		    </ul>
		    
		  </div>
		</div>
)}

MediaObject.defaultProps = {
  className: 'secondary'
}

export default MediaObject





/**
 Make generic 
 	// title 
 	// subtitle
	// date
	// description
	// supplementary
	// link


<li>
		<a href="//asfasf" className="arrow">Change appointment time</a>
</li>

*/

// Variants
// map
// infographic

// getDimensions() {
//     // Do some stuff here to return dimensions
//     return {
//       width: XXX,
//       height: XXX
//     }
//   }
//   <Parent ref="el">
//       <Table getDimension={ this.getDimensions } />
//     </Parent>



