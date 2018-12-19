import React from 'react'
import Price from './Price'

function ServicesAndEquipmentItem(props) {
    const {
      DisplayName
    } = props.item
 
    return (
      <tr>
        <td colSpan="3">{DisplayName}</td>
        <td className="align-right"><Price {...props.item } /></td>
      </tr>
    )
  }

export default ServicesAndEquipmentItem
