import React from 'react';
import './MessageCard.scss';

const MessageCard = (props) => {
  return (
    <div className='message-container'>
      <h3>{props.eventName[0].name}</h3>
    </div>
  )
}

export default MessageCard;
