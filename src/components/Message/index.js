import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Avatar from 'react-avatar';

const Message = ({data}) => {
    useEffect(() => {

    }, []);
    return (
        <div className="message-container">
            <Avatar round="50px" size="50" fgColor="#357edd" name='T' color="#d1dff0" />
            <div className="message-data">
                <p>{data.content}</p>
            </div>
        </div>
    );
};
Message.propTypes = {
    data: PropTypes.object.isRequired,
};
export default Message;
