import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './index.css';
import Header from '../Header';
import MessageInput from '../MessageInput';

import Message from '../Message';
import defaultMessages from '../../data/messages';
import addMessages from '../../data/add-messages';

const userId = 1;

const Content = () => {
	const [messages, setMessages] = useState(defaultMessages);

	useEffect(() => {
		addMessages(setMessages);
	}, []);

	const addMessage = content => {
		setMessages(messages => [
			...messages,
			{
				userId,
				content,
				sentAt: moment(),
			},
		]);
	};

	return (
		<div className="container">
			<Header />
			<div className="messages">
				{messages.map((message, i) => (
					<Message data={message} key={i} />
				))}
			</div>
			<MessageInput onEnter={addMessage} />
		</div>
	);
};

export default Content;
