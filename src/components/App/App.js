import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import MessageContainer from '../../containers/MessageContainer/MessageContainer';
import RestaurantContainer from '../../containers/RestaurantContainer/RestaurantContainer';
import MapContainer from '../../containers/MapContainer/MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="route-container">
          <Route path="/" component={Header} />
          <Route exact path="/message" component={MessageContainer} />
          <Route exact path="/randomizer" component={RestaurantContainer} />
          <Route exact path="/map" component={MapContainer} />
        </div>
      </div>
    );
  }
}

export default App;
