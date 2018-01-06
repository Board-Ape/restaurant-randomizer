import React from 'react';
import './RestaurantCard.css';
import PropTypes from 'prop-types';

const RestaurantCard = (props) => {
  return (
    <div className='card-container'>
      <div className='cards'>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;

RestaurantCard.propTypes = {
  title: PropTypes.string
};
