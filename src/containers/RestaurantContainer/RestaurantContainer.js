import React, { Component } from 'react';
import { getRestaurants, postLocation } from '../../actions';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
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

  renderRestaurantCard = () => {
    const restaurantsArray = shuffle(this.props.restaurantNames);
    const restaurantsCardsArray = restaurantsArray.map((restaurants, index) => {
      return (
        <RestaurantCard
          key={index}
          restaurants={restaurants}
        />
      );
    });
    return restaurantsCardsArray;
  }

  render() {
    const latitude = this.props.currentLocation.map(coords => {
      const coordsArray = coords.lat.toString();
      const coordsString = coordsArray.split('').splice(0, coordsArray.length-11).join('');
      return parseFloat(coordsString);
    });
    const longitude = this.props.currentLocation.map(coords => {
      const coordsArray = coords.lng.toString();
      const coordsString = coordsArray.split('').splice(0, coordsArray.length-11).join('');
      return parseFloat(coordsString);
    });
    return (
      <div className='card-container-container'>
        <div className='lat-long'>
          <div className='location-title'>Location: {this.props.title}</div>
          <div className='location-title'>Latitude: <span>{latitude}</span></div>
          <div className='location-title'>Longitude: <span>{longitude}</span></div>
        </div>
        {this.renderRestaurantCard()}
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
