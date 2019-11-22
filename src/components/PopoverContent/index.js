import React from 'react';
import Avatar from 'react-avatar';
import './index.css'
import Modal from 'react-modal';
import Iframe from 'react-iframe'


const PopoverContent = ({user}) => {

    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    const customStyles = {
        content : {
            width                 : '650px',
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
        },
        overlay: {zIndex: 1000},
    };

    Modal.setAppElement('#root');


    const sendMeetingLink = () => {

    };

    return (
      <div className="popover-container">
          <div className="popover-text"><b>{user.name} is nearby</b></div>
          <div className="popover-line"> </div>
          <div className="popover-text">
              <Avatar src='/assets/interests/coffee.png' round="50px" size="25" color="#d1dff0" />
              <span> Interested in having a coffee </span>
          </div>
          <div className="popover-text">
              <Avatar src='/assets/interests/deals.png' round="50px" size="25" color="#d1dff0" />
              <span> Interested in discussing leads </span>
          </div>
          <button className="get-in-touch" onClick={openModal}>
              Schedule Meeting</button>
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Set up a meeting"
          >
              <Iframe url="https://pipedrive-63a10f.pipedrive.com/scheduler/qJappQhJ/meeting"
                      width="100%"
                      height="650px"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"/>
              <button className="close" onClick={closeModal}>Close</button>
          </Modal>
      </div>
    );
};

export default PopoverContent;
