import React from 'react'
import Contact from './SiteContact'
import { RemoveBrackets }from './../utils/Core'
import { ReturnFormattedDate, IsDateInPast }from './../utils/Date'
import Map from './../components/Map'
import './SiteVisit.css'

const text = {
	future: "You have a engineer appointment scheduled for",
	past: "You had a engineer appointment scheduled for"
}

function SiteVisit(props) {
  const { EngineeringAppointmentDate, 
  				EngineeringAppointmentSlot, 
  				InstallationAddress, 
  				ProductDescription, 
  				SiteContact
  			} = props
  return (
  	<div className='siteVisit'>
		  <div className='siteVisit__graphic'>
				<Map location={InstallationAddress} />
				<div className='siteVisit__logo'>&nbsp;</div>
		  </div>
		  <div className='siteVisit__text'>
		  	<div className='siteVisit__text__container'>
	      	<h4>Engineering Appointment</h4>
		      <ul className='no-bullet'>
		      	<li className='margin-bottom-10'>
		      		<h5 className='margin-bottom-0'>Appointment time</h5>
		      		<p className='margin-bottom-0'>{ ReturnFormattedDate(EngineeringAppointmentDate) }, { RemoveBrackets(EngineeringAppointmentSlot) }</p>
			      </li>
		      	<li className='margin-bottom-10'>
		      		<h5 className='margin-bottom-0'>Installation Address</h5>
		      		<p className='margin-bottom-0'>{ InstallationAddress }</p>
		      	</li>
		      	<li className='margin-bottom-10'>
		      		<h5 className='margin-bottom-0'>Site Contact</h5>
		      		<p className='margin-bottom-0'><Contact { ...SiteContact } /> </p>
		      	</li>
		      	<li className='margin-bottom-10'>
		      		<h5 className='margin-bottom-0'>Details</h5>
		      		<p className='margin-bottom-0'>{ ProductDescription }</p>
		      	</li>
		      </ul>
	      </div>
    	</div>
    </div>
  )
}

export default SiteVisit
