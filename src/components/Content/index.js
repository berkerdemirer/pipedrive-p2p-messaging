import React, { useState, useEffect } from 'react';
import moment from 'moment';
import uuid from 'uuid';
import { animateScroll } from "react-scroll";
import './index.css';
import Header from '../Header';
import MessageInput from '../MessageInput';

import Message from '../Message';
import Topics from '../Topics';
import { addTopMessage, addThreadMessage, updateMessage } from '../../utils/messages';
import defaultMessages from '../../data/messages';
import addMessages from '../../data/add-messages';

const userId = 1;
const rootThread = -1;

const Content = () => {
	const [messages, setMessages] = useState(defaultMessages);
	const [thread, setThread] = useState(rootThread);
	const topics = [
		{ id: 1, name: 'Knowledge', img: '/assets/topics/knowledge.png' },
		{ id: 2, name: 'Optimize', img: '/assets/topics/issue.png' },
		{ id: 3, name: 'Random', img: '/assets/topics/random.png' },
    ];
    const [topic, setTopic] = useState(topics[0]);

	useEffect(() => {
		addMessages(setMessages);
	}, []);

	useEffect(() => {
		animateScroll.scrollToBottom({
			containerId: "messages-list",
			duration: 300,
        });
    }, [messages]);

	const createMessage = content => ({
		id: uuid(),
		userId,
		content,
		sentAt: moment(),
        upvotes: [],
        ...(thread === rootThread && { thread: [], topic: topic.id }),
	});

	const addMessage = content => {
		const message = createMessage(content);
		if (thread === rootThread) {
			setMessages(messages => addTopMessage(messages, message));
		} else {
			setMessages(messages => addThreadMessage(messages, thread, message));
        }
    };

    const handleTopicChange = topic => {
        setThread(rootThread);
        setTopic(topic);
    }

	const upvoteMessage = message => {
		setMessages(messages =>
			updateMessage(messages, message.id, thread, message => ({
				...message,
				upvotes: !message.upvotes.includes(userId)
					? [...message.upvotes, userId]
					: message.upvotes.filter(id => id !== userId),
			})),
		);
	};

	const filterMessages = messages => {
		if (thread === rootThread) {
			return messages.filter(message => message.topic === topic.id);
		} else {
			const threadMessage = messages.find(message => message.id === thread);
			return [threadMessage, ...threadMessage.thread];
		}
	};

	const renderThreadLink = (message, i) => {
		if (thread !== rootThread && i === 0) {
			return (
				<div className="message-thread-header">
					<span className="message-thread-text">Thread</span>
					<span className="message-thread-close">
						<i className="fa fa-times" aria-hidden="true" onClick={() => setThread(rootThread)}></i>
					</span>
				</div>
			);
		}
	};

	return (
		<div className="container">
			<Header />
			<Topics topics ={topics} topicChange={handleTopicChange} />
			<div className="messages" id="messages-list">
				{filterMessages(messages).map((message, i) => (
					<div key={message.id}>
						<Message
							data={message}
							openThread={() => thread === rootThread ? setThread(message.id): setThread(rootThread)}
							upvoteMessage={() => upvoteMessage(message)}
						/>
						{renderThreadLink(message, i)}
					</div>
				))}
			</div>
			<MessageInput onEnter={addMessage} />
		</div>
	);
};

export default Content;
