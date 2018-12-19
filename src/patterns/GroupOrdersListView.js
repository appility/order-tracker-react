import React from 'react'
import GroupOrdersListItem from './GroupOrdersListItem'
import Table from './../modules/Table'

const GroupOrdersListView = (props) => (
  <section data-test-id="OrdersListView">
    <table className="lined stack">
        <thead aria-hidden="false" className="visually-hidden">
          <tr>
            <th className="five">Order name</th>
            <th className="five">Ordered on</th>
            <th className="two">Actions</th>
          </tr>
        </thead>
        <tbody>
        {props.items.map((item, index)  => (  
          <GroupOrdersListItem { ...props} item={item} index={index} key={index} params={props.match.params}/>
        ))}
      </tbody>
    </table>
    <Table />
  </section>
);

export default GroupOrdersListView;
