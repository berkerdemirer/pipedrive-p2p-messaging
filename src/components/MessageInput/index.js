import React, { useState } from 'react';
import './index.css';

const MessageInput = ({ onEnter }) => {
    const [content, setContent] = useState('');

    const handleEnter = () => {
        onEnter(content);
        setContent('');
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
				/>
				<button className="send-message-btn" onClick={handleEnter}>Enter</button>
				<div className="messageToolbar" />
			</div>
		</div>
	);
};

export default MessageInput;
