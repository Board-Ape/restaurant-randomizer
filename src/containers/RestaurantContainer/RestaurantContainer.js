import React, { Component } from 'react';
import { getRestaurants } from '../../actions';
import { makeRestaurantArray } from '../../actions';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { connect } from 'react-redux';

class RestaurantContainer extends Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount = async () => {
    const nearbyRestaurants = await getRestaurants();
    this.props.storeRestaurants(nearbyRestaurants);
  }

  render() {
    return(
      <div>
        <RestaurantCard />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantName: state.restaurantName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeRestaurants: (restaurants) => {
      dispatch(makeRestaurantArray(...restaurants))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);
