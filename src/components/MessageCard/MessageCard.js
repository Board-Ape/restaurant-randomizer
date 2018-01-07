import React from 'react';
import './MessageCard.scss';
import PropTypes from 'prop-types';

const MessageCard = (props) => {
  return (
    <div className='message-container'>
      <div className='message-display'>{props.eventName.map(message => message.name)}</div>
    </div>
  );
};

export default MessageCard;

MessageCard.propTypes = {
  eventName: PropTypes.array
};
