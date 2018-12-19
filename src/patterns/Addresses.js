import React from 'react';
import OptionallyDisplayed from './../utils/OptionallyDisplayed';
import Address from './Address';

const Addresses = (props) => (
	<section>
		  <h3>Billing address</h3>
		  <hr />
      <table className="stack">
      <thead className="visually-hidden">
        <tr>
          <OptionallyDisplayed display={Boolean(props.BillingAddress)}>
            <th className="four">Billing address</th>
          </OptionallyDisplayed>
          <th className="four">&nbsp;</th>
          <th className="four">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <OptionallyDisplayed display={Boolean(props.BillingAddress)}>
            <td className="four">
              <Address {...props.BillingAddress} />
            </td>
          </OptionallyDisplayed>
          <td className="four">&nbsp;</td>
          <td className="four">&nbsp;</td>
        </tr>
      </tbody>
      </table>
	</section>
);

export default Addresses

