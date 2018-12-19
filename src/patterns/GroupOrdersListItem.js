import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import StatusLabel from './../patterns/StatusLabel';
import { ReturnFormattedDate }from './../utils/Date';

function GroupOrdersListItem(props) {
    const {
      Description,
      OrderNumber,
      Status,
      OrderDate
    } = props.item

    let { postcode = '' } = props.params || {}

    return (
      <tr>
        <td className="five">
          <h3 className="h3 margin-bottom-10">{Description}</h3>
          <p>{OrderNumber}</p>
          <p><StatusLabel status={Status} /></p>
        </td>
        <td className="five">
          <p>Ordered on &nbsp;<b>{OrderDate && ReturnFormattedDate(OrderDate)}</b></p>
        </td>
        <td className="two align-right-medium">
          <Link to={{
            pathname: `/order/${OrderNumber}/${postcode}`
          }} className="button flush-small">View order</Link>
        </td>
      </tr>
    );
  }

export default GroupOrdersListItem;

GroupOrdersListItem.propTypes = {
  item: PropTypes.shape({
    Description: PropTypes.string,
    OrderNumber: PropTypes.string,
    Status: PropTypes.string,
    OrderDate: PropTypes.string,
  })
}
      
