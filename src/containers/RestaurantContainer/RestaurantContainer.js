import React, { Component } from 'react';
import { getRestaurants, postLocation } from '../../actions';
import RestaurantCardContainer from '../RestaurantCardContainer/RestaurantCardContainer';
import { connect } from 'react-redux';
import './RestaurantContainer.css';
import PropTypes from 'prop-types';
import shuffle from 'lodash/shuffle';

export class RestaurantContainer extends Component {

  componentDidMount = async () => {
    const currentLocation = await postLocation();
    const nearbyRestaurants = await getRestaurants();
    this.props.storeRestaurants(nearbyRestaurants);
    this.props.storeLocation(currentLocation);
  }

  renderRestaurantCardContainer = () => {
    const restaurantsArray = shuffle(this.props.restaurantNames);
    const restaurantsCardsArray = restaurantsArray.splice(0, 3).map((restaurants, index) => {
      return (
        <RestaurantCardContainer
          key={index}
          restaurants={restaurants}
        />
      );
    });
    return restaurantsCardsArray;
  }

  latitude = () => {
    return this.props.currentLocation.map(coords => coords.lat.toFixed(4));
  }

  longitude = () => {
    return this.props.currentLocation.map(coords => coords.lng.toFixed(4));
  }

  render() {
    return (
      <div className='card-container-container'>
        <div className='lat-long'>
          <div className='location-title'>Location</div>
          <div className='location-title'>Latitude: <span>{this.latitude()}</span></div>
          <div className='location-title'>Longitude: <span>{this.longitude()}</span></div>
        </div>
        <div>{this.renderRestaurantCardContainer()}</div>
      </div>
    );
  }
}

export const mapStateToProps = (store) => {
  return {
    restaurantNames: store.restaurantNames,
    currentLocation: store.currentLocation
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    storeRestaurants: (restaurants) => dispatch(getRestaurants(restaurants)),
    storeLocation: (location) => dispatch(postLocation(location))
  };
};

RestaurantContainer.propTypes = {
  storeRestaurants: PropTypes.func,
  storeLocation: PropTypes.func,
  restaurantNames: PropTypes.array,
  currentLocation: PropTypes.array,
  title: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);
