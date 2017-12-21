import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = (props) => {
 return (
   <div className='card-container'>
    <div className='cards'>
      <h3>{props.title}</h3>
    </div>
   </div>
 )
}

export default RestaurantCard;
