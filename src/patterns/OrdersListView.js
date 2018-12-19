import React from 'react';
import OrdersListItem from './OrdersListItem';
import Table from './../modules/Table';

const OrdersListView = (props) => (
  <section data-test-id="OrdersListView">
    <table className="padding-large unstriped lined stack">
        <thead aria-hidden="false" className="visually-hidden">
          <tr>
            <th width="30%">Product name</th>
            <th width="30%">Status</th>
            <th width="20%">Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {props.items.map((item, index)  => (  
          <OrdersListItem item={item} index={index} key={index}/>
        ))}
      </tbody>
    </table>
    <Table />
  </section>
);

export default OrdersListView;
