import React from 'react';
import './index.css';
import Header from "../Header";
import MessageInput from "../MessageInput";

const Content = () => {

    return (
        <div className="container">
            <Header/>
            <MessageInput/>
        </div>
    );
};

export default Content;
