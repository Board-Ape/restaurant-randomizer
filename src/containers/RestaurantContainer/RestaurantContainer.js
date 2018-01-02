import React, { Component } from 'react';
import { getRestaurants, getLocation } from '../../actions';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
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
    const nearbyRestaurants = await getRestaurants();
    this.props.storeRestaurants(nearbyRestaurants);
  }

  componentWillMount = async () => {
    const location = await getLocation();
    this.props.storeLocation(location);
  }

  render() {
    const uniqueKey = Date.now();
    console.log(this.props.location.map(thisHere => thisHere));
    const restaurantsArray = this.props.restaurantNames;
    const restaurantsCardsArray = restaurantsArray.map(restaurant => {
      return (<RestaurantCard key={uniqueKey}
                              title={restaurant} />);
    const coordinates = this.props.location;

    })
    return(
      <div className='card-container-container'>
        <header><h1>Location: {this.props.title}</h1></header>
          <div className='lat-long'>
            <div>Latitude: <span>{this.state.latitude}</span></div>
            <div>Longitude: <span>{this.state.longitude}</span></div>
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
    location: store.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeLocation: (location) => {
      dispatch(getLocation(location))
    },
    storeRestaurants: (restaurants) => {
      dispatch(getRestaurants(restaurants))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);
