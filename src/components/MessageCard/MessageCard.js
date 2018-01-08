import React from 'react';
import './MessageCard.css';
import PropTypes from 'prop-types';

const MessageCard = (props) => {
  return (
    <div className='message-container'>
      <div className='message-display'>{props.eventName}</div>
    </div>
  );
};

export default MessageCard;

MessageCard.propTypes = {
  eventName: PropTypes.array
};
