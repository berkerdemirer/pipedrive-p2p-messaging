import React from 'react';
import './index.css'

const PopoverContent = ({user}) => {
    return (
      <div className="popover-container">
          <div className="popover-text"><b>{user.name} is nearby</div>
          <div className="popover-text">Interested in having a coffee</div>
          <div className="popover-text">Interested talking about leads</div>
          <button className="get-in-touch">Get in Touch</button>
      </div>
    );
};

export default PopoverContent;