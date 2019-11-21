import React, { useState, useEffect } from 'react';
import useInterval from '@use-it/interval';
import PropTypes from 'prop-types';
import './index.css';
import Avatar from 'react-avatar';
import users from '../../data/users';

const Message = ({ data,openThread,id}) => {
    const user = users[data.userId];
    const [sentAt, setSentAt] = useState(data.sentAt.fromNow());
    useEffect(() => {}, []);

    useInterval(() => {
        setSentAt(data.sentAt.fromNow());
    }, 1000);


    return (
        <div className="message-container">
            <Avatar src={user.avatar} round="50px" size="50" fgColor="#357edd" name='T' color="#d1dff0" />
            <div className="message-data">
                <p className="message-data-user">{user.name}</p>
                <span className="message-data-time">{sentAt}</span>
                <p className="message-data-text">{data.content}</p>
                {data.thread &&
                <div className="message-actions">
                    <p  onClick={()=>openThread(data,id)}>
                        <i className="fa fa-comment-o" aria-hidden="true"></i> {data.thread.length} comments</p>
                    <p><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 3 like</p>
                    <p><i className="fa fa-share-square-o" aria-hidden="true"/> share</p>
                </div>
                }

            </div>

        </div>
    );
};
Message.propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    openThread: PropTypes.func.isRequired,
};
export default Message;
