import React from 'react';
import './MessageCard.scss';

const MessageCard = (props) => {
  return (
    <div className='message-container'>
      <div className='message-display'>{props.eventName[0].name}</div>
    </div>
  )
}

export default MessageCard;
