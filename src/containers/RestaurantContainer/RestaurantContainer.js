import React, { Component } from 'react';
import { getRestaurants, postLocation } from '../../actions';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { connect } from 'react-redux';
import './RestaurantContainer.css';
import PropTypes from 'prop-types';

class RestaurantContainer extends Component {
  constructor() {
    super();
    this.state = {
      coords: {latitude: 0, longitude: 0}
    };
  }

  componentDidMount = async () => {
    const currentLocation = await postLocation();
    const nearbyRestaurants = await getRestaurants();
    this.props.storeRestaurants(nearbyRestaurants);
    this.props.storeLocation(currentLocation);
  }

  render() {
    const uniqueKey = Date.now();
    const latitude = this.props.currentLocation.map(coords => coords.lat);
    const longitude = this.props.currentLocation.map(coords => coords.lng);
    const restaurantsArray = this.props.restaurantNames;
    const randomRestaurant = restaurantsArray[Math.floor(restaurantsArray.length * Math.random())];
    console.log(randomRestaurant);
    const restaurantsCardsArray = restaurantsArray.map(restaurant => {
      return (
        <RestaurantCard
          key={uniqueKey}
          title={restaurant}
        />
      );
    });
    return (
      <div className='card-container-container'>
        <header><div className='location-title'>Location: {this.props.title}</div></header>
        <div className='lat-long'>
          <div>Latitude: <span>{latitude}</span></div>
          <div>Longitude: <span>{longitude}</span></div>
        </div>
        {restaurantsCardsArray}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    restaurantNames: store.restaurantNames,
    currentLocation: store.currentLocation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeRestaurants: (restaurants) => dispatch(getRestaurants(restaurants)),
    storeLocation: (location) => dispatch(postLocation(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);

RestaurantContainer.propTypes = {
  storeRestaurants: PropTypes.func,
  storeLocation: PropTypes.func,
  restaurantNames: PropTypes.array,
  currentLocation: PropTypes.array,
  title: PropTypes.string
};
