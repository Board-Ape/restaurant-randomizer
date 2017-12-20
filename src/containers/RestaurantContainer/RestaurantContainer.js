import React, { Component } from 'react';
import { getRestaurants } from '../../actions';
import { makeRestaurantArray } from '../../actions';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { connect } from 'react-redux';

class RestaurantContainer extends Component {
  constructor() {
    super();
  }

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
      <div>
        RestaurantContainer
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
