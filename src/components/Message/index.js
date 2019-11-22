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
    const isUpvoted = data.upvotes.includes(userId);

	const handleUpvote = () => {
		if (!isOwnComment) {
            upvoteMessage();
		}
    };

    const upvoteClassName = () => {
        const className = [];
        if (!isOwnComment) className.push("message-actions-hover")
        if (isUpvoted) className.push("message-actions-active");
        return className.join(' ');
    }

	return (
		<div className="message-container">
			<Avatar src={user.avatar} round="50px" size="50" fgColor="#357edd" name="T" color="#d1dff0" />
			<div className="message-data">
				<p className="message-data-user">{user.name}</p>
				<span className="message-data-time">{sentAt}</span>
				<p className="message-data-text">{data.content}
					{data.id==='776df791-4f32-463f-b5e4-ed12b41b5a24'?
						<span className="message-link">
							<a
								href='https://support.pipedrive.com/hc/en-us/articles/360001930658-Insights-feature-Beta-'>
							Here is there article</a>
						</span>
						:null}
				</p>
				{data.id==='776df791-4f32-463f-b5e4-ed12b41b5a24'?
					<img src='https://support.pipedrive.com/hc/article_attachments/360003115857/Screen_Shot_2019-06-26_at_7.20.18_PM.png'/>
				:null}

				{data.id==='776df791-4f32-463f-b5e4-ed12dwb41b5a534'?
					<img src='/assets/quotes/pipelines.png' width='300px'/>
				:null}

				<div className="message-actions">
				    {data.thread && (
						<p className="message-actions-hover" onClick={() => openThread()}>
							<i className="fa fa-comment-o" aria-hidden="true"></i>
							&nbsp;
							{data.thread.length}
						</p>
                    )}
					<p className={upvoteClassName()} onClick={handleUpvote}>
						<i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
						&nbsp;
						{data.upvotes.length}
					</p>
					<p className="message-actions-hover">
						<i className="fa fa-share-square-o" aria-hidden="true" />
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
