import React from 'react';

const Address = (props) => (
	<address>
		{ props.BuildingName && <span>{props.BuildingName}<br/></span> }
		{ props.BuildingNumber && <span>{props.BuildingNumber} </span> }
		{ props.ThoroughfareName && <span>{props.ThoroughfareName}<br/></span> }
		{ props.PostTown && <span>{props.PostTown}<br/></span> }
		{ props.County && <span>{props.County}<br/></span> }
		{ props.Postcode && <span>{props.Postcode}<br/></span> }
		{ props.Country && <span>{props.Country}<br/></span> }
	</address>
	)

export default Address