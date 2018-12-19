import React from 'react'
import './InfoCard.css'

export default function InfoCard(props) {
  return (
    <div className="infoCard">
      {props.children}
    </div>
  )
}
