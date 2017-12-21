import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import AddMessage from '../../containers/AddMessage/AddMessage';
import RestaurantContainer from '../../containers/RestaurantContainer/RestaurantContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="route-container">
          <Route path="/" component={Header} />
          <Route exact path="/message" component={AddMessage} />
          <Route exact path="/randomizer" component={RestaurantContainer} />
        </div>
      </div>
    );
  }
}

export default App;
