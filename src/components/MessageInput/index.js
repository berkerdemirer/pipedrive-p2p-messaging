import React from 'react'
import './index.css'

const MessageInput = () => {
  return (
      <div>
          <div className="messageInputContainer">
              <input type="text" className="input" placeholder="Type your message"/>
              <div className="messageToolbar"/>
          </div>
      </div>
  );
};

export default MessageInput;