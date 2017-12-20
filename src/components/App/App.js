import React, { Component } from 'react';
import './App.css';
import AddMessage from '../../containers/AddMessage/AddMessage';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddMessage />
      </div>
    );
  }
}

export default App;
