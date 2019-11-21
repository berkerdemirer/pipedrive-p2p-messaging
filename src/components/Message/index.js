import React, { useState, useEffect } from 'react';
import useInterval from '@use-it/interval';
import PropTypes from 'prop-types';
import './index.css';
import Avatar from 'react-avatar';
import users from '../../data/users';

const userId = 1;

const Message = ({ data, openThread, upvoteMessage }) => {
	const user = users[data.userId];
	const [sentAt, setSentAt] = useState(data.sentAt.fromNow());
	useEffect(() => {}, []);

	useInterval(() => {
		setSentAt(data.sentAt.fromNow());
	}, 1000);

    const isOwnComment = data.userId === userId;

	const handleUpvote = () => {
		if (!isOwnComment) {
            upvoteMessage();
		}
	};

	return (
		<div className="message-container">
			<Avatar src={user.avatar} round="50px" size="50" fgColor="#357edd" name="T" color="#d1dff0" />
			<div className="message-data">
				<p className="message-data-user">{user.name}</p>
				<span className="message-data-time">{sentAt}</span>
				<p className="message-data-text">{data.content}</p>
				<div className="message-actions">
				    {data.thread && (
						<p onClick={() => openThread()}>
							<i className="fa fa-comment-o" aria-hidden="true"></i>
							{data.thread.length} {data.thread.length === 1 ? 'comment' : 'comments'}
						</p>
                    )}
					<p onClick={handleUpvote}>
						<i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
						{data.upvotes.length} {data.upvotes.length === 1 ? 'like' : 'likes'}
					</p>
					<p>
						<i className="fa fa-share-square-o" aria-hidden="true" /> share
					</p>
				</div>

			</div>
		</div>
	);
};
Message.propTypes = {
	data: PropTypes.object.isRequired,
	openThread: PropTypes.func.isRequired,
};
export default Message;
