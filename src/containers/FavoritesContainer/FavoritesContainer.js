import React from 'react';
import { connect } from 'react-redux';
import RestaurantCardContainer from '../RestaurantCardContainer/RestaurantCardContainer';
import PropTypes from 'prop-types';

export const FavoritesContainer = (props) => {
  const favoriteCards = props.favorites.map((restaurants, index) => {
    return <RestaurantCardContainer
      key={index}
      restaurants={restaurants}
    />;
  });
  return (
    <div>
      <div className='favorite-cards'>{favoriteCards}</div>
    </div>
  );
};

export const mapStateToProps = (store) => {
  return {
    favorites: store.favorites
  };
};

export default connect(mapStateToProps, null)(FavoritesContainer);

FavoritesContainer.propTypes = {
  favorites: PropTypes.array
};
