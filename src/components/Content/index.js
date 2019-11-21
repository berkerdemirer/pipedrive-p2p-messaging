import React from 'react';
import './index.css';
import Header from "../Header";
import MessageInput from "../MessageInput";

import Message from "../Message";
import messages from "../../data/messages"
const Content = () => {

    return (
        <div className="container">
            <Header/>
            <div className="messages">
                {messages.map((message, i) => <Message data={message} />)}
            </div>
            <MessageInput/>
        </div>
    );
};

export default Content;
