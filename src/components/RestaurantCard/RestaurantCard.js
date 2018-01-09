import React, { Component } from 'react';
import './RestaurantCard.css';
import PropTypes from 'prop-types';
import { addFavorite, deleteFavorite } from '../../actions';
import { connect } from 'react-redux';

export class RestaurantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  filterFavorites = (index) => {
    let results = this.props.favorites.filter(favorites => favorites.restaurants.name === index);
    return results;
  }

  handleFavorites = (restaurantCard) => {
    this.setState({active: true});
    if (!this.filterFavorites(restaurantCard).length) {
      return this.props.addFavorite(restaurantCard);
    } else {
      this.setState({active: false});
      return this.props.deleteFavorite(restaurantCard);
    }
  }

  render() {
    return (
      <div className='card-container'>
        <div className='cards'>
          <span
            className={this.state.active === false ? 'favorite' : 'favorite selected'}
            onClick={() => this.handleFavorites(this.props)}>
            Favorite
          </span>
          <h2 className='rating'>Rating: {this.props.restaurants.data.Rating}</h2>
          <h1 className='restaurant-name'>{this.props.restaurants.name}</h1>
          <h2 className='cuisine'>Cuisine: {this.props.restaurants.data.Cuisines}</h2>
          <h2 className='address'>Address:</h2>
          <h2 className='address'>{this.props.restaurants.data.Address}</h2>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (store) => {
  return {
    favorites: store.favorites
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (favorites) => dispatch(addFavorite(favorites)),
    deleteFavorite: (favorites) => dispatch(deleteFavorite(favorites))
  };
};

RestaurantCard.propTypes = {
  restaurants: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.object,
  Rating: PropTypes.string,
  Cuisines: PropTypes.string,
  Address: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCard);
