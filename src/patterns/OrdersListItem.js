import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import StatusLabel from './../patterns/StatusLabel';
import { ReturnFormattedDate }from './../utils/Date';

function OrdersListItem(props) {
    const {
      OrderDescription,
      OrderRef,
      OrderStatus,
      EstimatedCompletionDate
    } = props.item;
 
    return (
      <tr>
        <td className="four">
          <h3 className="h3 margin-bottom-10">{OrderDescription}</h3>
          <p>
            {OrderRef} <br />
            <StatusLabel status={OrderStatus} />
          </p>
        </td>
        <td className="three">
          <p>Completion on &nbsp; 
            <b>{EstimatedCompletionDate && ReturnFormattedDate(EstimatedCompletionDate)}
            </b>
          </p>
        </td>
        <td className="two align-right-medium">
          <Link to={{
            pathname: `/order/${OrderRef}`
          }} className="button flush-small">View order</Link>
        </td>
      </tr>
    );
  }

export default OrdersListItem;

OrdersListItem.propTypes = {
  item: PropTypes.shape({
    OrderDescription: PropTypes.string,
    OrderRef: PropTypes.string,
    OrderStatus: PropTypes.string,
    EstimatedCompletionDate: PropTypes.string
  })
}


