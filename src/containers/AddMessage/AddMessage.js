import React, { Component } from 'react';
import './AddMessage.css';

class AddMessage extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  render() {
    return(
      <div className='add-message-container'>
        <h1>AddMessage!</h1>
      </div>
    )
  }
}

export default AddMessage;
