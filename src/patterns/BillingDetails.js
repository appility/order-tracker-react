import React from 'react'
import PropTypes from 'prop-types'

const { string } = PropTypes;

const BillingDetails = (props) => (
	<section>
		<h3>Billing Details</h3>
		<hr />
	  <table className="stack">
	    <thead>
	      <tr>
	        <th className="four">Billing account number</th>
	        <th className="two">Frequency</th>
	        <th className="two">Type</th>
	        <th className="four">Payment method</th>
	      </tr>
	    </thead>
	    <tbody>
	      <tr>
	        <td className="four">{props.BillingAddress.AddressIdentifier}</td>
	        <td className="two">{props.BillFrequency}</td>
	        <td className="two">{props.BillType}</td>
	        <td className="four">{props.PaymentMethod}</td>
	      </tr>
	    </tbody>
	  </table>
  </section>
);

export default BillingDetails

BillingDetails.propTypes = {
  BillFrequency: string
};

BillingDetails.defaultProps = {
  BillingAddress: {
	AddressIdentifier: '-'
  },
  BillFrequency: '-',
  BillType: '-',
  PaymentMethod: '-'
}
