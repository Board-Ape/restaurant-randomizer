import React, { Component } from 'react';
import { getRestaurants, postLocation } from '../../actions';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import {getNearbyRestaurants} from '../../helper/apiCalls';
import { connect } from 'react-redux';
import './RestaurantContainer.css';

class RestaurantContainer extends Component {
  constructor() {
    super();
    this.state = {
      coords: {latitude: 0, longitude: 0}
    }
  }

  componentDidMount = async () => {
    const currentLocation = await postLocation();
    const nearbyRestaurants = await getRestaurants();
    this.props.storeRestaurants(nearbyRestaurants);
    this.props.storeLocation(currentLocation);
  }

  // updateCoordinates = () => {
  //   const coordinatess = this.props.currentLocation
  //   this.setState({coords: coordinatess})
  // }

  render() {
    const uniqueKey = Date.now();
    const restaurantsArray = this.props.restaurantNames;
    const latitude = this.props.currentLocation.map(coords => coords.lat);
    const longitude = this.props.currentLocation.map(coords => coords.lng);
    const restaurantsCardsArray = restaurantsArray.map(restaurant => {
      return (<RestaurantCard key={uniqueKey}
                              title={restaurant} />);
    })
    return(
      <div className='card-container-container'>
        <header><h1>Location: {this.props.title}</h1></header>
          <div className='lat-long'>
            <div>Latitude: <span>{latitude}</span></div>
            <div>Longitude: <span>{longitude}</span></div>
          </div>
        <h2>RestaurantContainer</h2>
        {restaurantsCardsArray}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    restaurantNames: store.restaurantNames,
    currentLocation: store.currentLocation,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeRestaurants: (restaurants) => dispatch(getRestaurants(restaurants)),
    storeLocation: (location) => dispatch(postLocation(location))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);
