import React, { Component } from 'react';
import './AddMessage.css';

class AddMessage extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  render() {
    return(
      <div className='add-message-container'>
        <h1>AddMessage!</h1>
        <input type='text'
                placeholder='Event Name'
                value={this.state.name}
                onChange={this.handleChange} />
        <input type='submit' />
      </div>
    )
  }
}

export default AddMessage;
