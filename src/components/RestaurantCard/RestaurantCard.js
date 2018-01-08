import React from 'react';
import './RestaurantCard.css';
import PropTypes from 'prop-types';

const RestaurantCard = (props) => {
  return (
    <div className='card-container'>
      <div className='cards'>
        <h2 className='rating'>Rating: {props.restaurants.data.Rating}</h2>
        <h1 className='restaurant-name'>{props.restaurants.name}</h1>
        <h2 className='cuisine'>Cuisine: {props.restaurants.data.Cuisines}</h2>
        <h2 className='address'>Address:</h2>
        <h2 className='address'>{props.restaurants.data.Address}</h2>
      </div>
    </div>
  );
};

export default RestaurantCard;

RestaurantCard.propTypes = {
  restaurants: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.object,
  Rating: PropTypes.string,
  Cuisines: PropTypes.string,
  Address: PropTypes.string
};
