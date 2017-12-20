import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import AddMessage from '../../containers/AddMessage/AddMessage';
import RestaurantContainer from '../../containers/RestaurantContainer/RestaurantContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddMessage />
        <RestaurantContainer />
      </div>
    );
  }
}

export default App;
