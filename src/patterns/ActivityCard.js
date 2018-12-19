import React from 'react';
import InfoCard from './../components/InfoCard'
import MediaObject from './../modules/MediaObject'

const ActivityCard = (props) => (
  <InfoCard className="gray-white-smoke">
    <MediaObject {...props} className="reverse-stack"/>
  </InfoCard>
);

export default ActivityCard;


