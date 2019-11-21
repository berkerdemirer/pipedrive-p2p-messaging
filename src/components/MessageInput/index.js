import React, { useState } from 'react';
import './index.css';
import {animateScroll} from "react-scroll/modules";

const MessageInput = ({ onEnter }) => {
    const [content, setContent] = useState('');

    const handleEnter = () => {
		animateScroll.scrollToBottom({
			containerId: "messages-list"
		});
		if(content !== '') {
			onEnter(content);
			setContent('');
		}
    };

	const keyPress = (e) => {
		if(e.keyCode === 13){
			animateScroll.scrollToBottom({
				containerId: "messages-list"
			});
			if(content !== ''){
				onEnter(content);
				setContent('');
			}
		}
	};

	return (
		<div>
			<div className="messageInputContainer">
				<input
					type="text"
					className="input"
					placeholder="Type your message"
					value={content}
					onChange={e => setContent(e.target.value)}
					onKeyDown={keyPress}
				/>
				<button className="send-message-btn" onClick={handleEnter}>Enter</button>
			</div>
		</div>
	);
};

export default MessageInput;
