import React, { Component } from 'react';
import { getRestaurants } from '../../actions';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { connect } from 'react-redux';
import './RestaurantContainer.css';

class RestaurantContainer extends Component {

  componentDidMount = async () => {
    const nearbyRestaurants = await getRestaurants();
    this.props.storeRestaurants(nearbyRestaurants);
  }

  render() {
    const uniqueKey = Date.now()
    const restaurantsArray = this.props.restaurantNames
    const restaurantsCardsArray = restaurantsArray.map(restaurant => {
      return (<RestaurantCard key={uniqueKey}
                              title={restaurant} />)
    })
    return(
      <div className='card-container-container'>
        <h2>RestaurantContainer</h2>
        {restaurantsCardsArray}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    restaurantNames: store.restaurantNames
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeRestaurants: (restaurants) => {
      dispatch(getRestaurants(restaurants))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);
