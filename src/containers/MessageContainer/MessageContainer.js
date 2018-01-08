import React, { Component } from 'react';
import './MessageContainer.css';
import { connect } from 'react-redux';
import { addEventName } from '../../actions';
import MessageCard from '../../components/MessageCard/MessageCard';
import PropTypes from 'prop-types';

class MessageContainer extends Component {
  constructor() {
    super();
    this.state = {
      eventTitle: ''
    };
  }

  handleChange = (event) => {
    this.setState({eventTitle: event.target.value});
  }

  submitEventName = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.eventTitle, this.props.eventName.length);
  }

  renderMessageCards = () => {
    const messageCardArray = this.props.eventName.map( (message) => {
      return (<MessageCard
        key={message.index}
        eventName={message.name}
      />);
    });
    return messageCardArray;
  }

  render() {

    return (
      <div className='add-message-container'>
        <h2 className='message-container-title'>AddMessage!</h2>
        <form onSubmit={this.submitEventName}>
          <input
            className='text-box'
            type='text'
            placeholder='Text Message'
            value={this.state.eventTitle}
            onChange={this.handleChange}
          />
          <input className='submit-button' type='submit' />
        </form>
        <div>{this.renderMessageCards()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { eventName: state.eventName };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (eventTitle, id) => {
      dispatch(addEventName(eventTitle, id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);

MessageContainer.propTypes = {
  handleSubmit: PropTypes.func,
  eventName: PropTypes.array
};
