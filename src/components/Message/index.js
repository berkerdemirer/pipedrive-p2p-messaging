import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Avatar from 'react-avatar';
import users from "../../data/users"
const Message = ({data}) => {
    const user = users[data.userId];
    useEffect(() => {

    }, []);
    return (
        <div className="message-container">
            <Avatar src={user.avatar} round="50px" size="50" fgColor="#357edd" name='T' color="#d1dff0" />
            <div className="message-data">
                <p className="message-data-user">{user.name}</p>
                <span className="message-data-time">{data.sentAt.fromNow()}</span>
                <p>{data.content}</p>
            </div>
        </div>
    );
};
Message.propTypes = {
    data: PropTypes.object.isRequired,
};
export default Message;
