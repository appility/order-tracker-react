import React from 'react';
import ActivityCard from './ActivityCard'

const ActivityCards = (props) => (
  <div className='card-group'>
    {props.items.map((item, index)  => (  
      <ActivityCard item={item} index={index} key={index}/>
    ))}
  </div>
);

export default ActivityCards;
