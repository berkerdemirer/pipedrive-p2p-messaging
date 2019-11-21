import React, { useState, useEffect } from 'react';
import './index.css';
import Header from "../Header";
import MessageInput from "../MessageInput";

import Message from "../Message";
import defaultMessages from "../../data/messages"
import addMessages from "../../data/add-messages";

const Content = () => {
    const [messages, setMessages] = useState(defaultMessages);

    useEffect(() => {
        addMessages(setMessages);
    }, []);

    return (
        <div className="container">
            <Header/>
            <div className="messages">
                {messages.map((message, i) => <Message data={message} key={i}/>)}
            </div>
            <MessageInput/>
        </div>
    );
};

export default Content;
