import React from 'react';
import './RestaurantCard.css';
import PropTypes from 'prop-types';

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className='card-container'>
      <div className='cards'>
        <h1 className='restaurant-name'>{props.restaurants.name}</h1>
        <h2 className='address'>Address: {props.restaurants.data.Address}</h2>
      </div>
    </div>
  );
};

export default RestaurantCard;

RestaurantCard.propTypes = {
  title: PropTypes.string
};
