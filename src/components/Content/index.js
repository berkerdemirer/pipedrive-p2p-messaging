import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './index.css';
import Header from '../Header';
import MessageInput from '../MessageInput';

import Message from '../Message';
import defaultMessages from '../../data/messages';
import addMessages from '../../data/add-messages';

const userId = 1;
const rootThread = -1;

const Content = () => {
	const [messages, setMessages] = useState(defaultMessages);
	const [thread, setThread] = useState(rootThread);

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
				thread: [],
			},
		]);
	};

	const filterMessages = messages => {
		if (thread === rootThread) {
			return messages;
		} else {
			return [messages[thread], ...messages[thread].thread];
		}
	};

	const renderThreadLink = (message, i) => {

	    if (thread !== rootThread && i === 0) {
			return <div className="message-thread-header">
                    <span className="message-thread-text" >Thread</span>
                    <span className="message-thread-close" onClick={() => setThread(rootThread)}>
                        <i className="fa fa-times" aria-hidden="true"></i></span>
                  </div>;
		}
	};

	return (
		<div className="container">
			<Header />
			<div className="messages">
				{filterMessages(messages).map((message, i) => (
					<div key={i}>

						<Message data={message}
                                 id={i}
                                 openThread ={(message,i)=>setThread(i)}
                        />
                        {renderThreadLink(message,i)}
					</div>
				))}
			</div>
			<MessageInput onEnter={addMessage} />
		</div>
	);
};

export default Content;
