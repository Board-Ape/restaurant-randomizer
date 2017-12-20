import React, { Component } from 'react';
import { getRestaurants } from '../../actions';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

class RestaurantContainer extends Component {
  constructor() {
    super()
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   this.props.getRestaurants()
  // }

  render() {
    return(
      <div>
        <RestaurantCard />
      </div>
    )
  }
}

export default RestaurantContainer;
