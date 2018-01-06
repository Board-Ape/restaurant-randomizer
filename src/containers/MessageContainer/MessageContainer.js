import React, { Component } from 'react';
import './MessageContainer.css';
import { connect } from 'react-redux';
import { addEventName } from '../../actions';
import MessageCard from '../../components/MessageCard/MessageCard';

class AddMessage extends Component {
  constructor() {
    super()
    this.state = {
      eventTitle: ''
    }
  }

  handleChange = (event) => {
    this.setState({eventTitle: event.target.value})
  }

  submitEventName = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.eventTitle, this.props.eventName.length)
  }

  render() {
    const messagesArray = this.props.eventName
    const messageCardArray = messagesArray.map(messages => {
      return (<MessageCard key={this.props.eventName}
                            eventName={this.props.eventName} />)
    })
    return(
      <div className='add-message-container'>
        <h1>AddMessage!</h1>
        <form onSubmit={this.submitEventName}>
          <input type='text'
                  placeholder='Event Name'
                  value={this.state.eventTitle}
                  onChange={this.handleChange} />
          <input type='submit' />
        </form>
        {messageCardArray}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { eventName: state.eventName }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (eventTitle, id) => {
      dispatch(addEventName(eventTitle, id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);
