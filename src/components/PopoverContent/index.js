import React from 'react';

const PopoverContent = ({user}) => {
    return (
      <div className="popover-container">
          <div className="name">{user.name} is nearby</div>
          <div>Interested in having a coffee</div>
          <div>Interested talking about leads</div>
          <button>Get in Touch</button>
      </div>
    );
};

export default PopoverContent;