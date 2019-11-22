import React from 'react'
import Avatar from 'react-avatar';
import './index.css'

const Header = () => {
    return (
        <div className="header">
            <img src="/assets/Pipedrive_full_logo_dark.png" alt="logo" className="logo"/>
            <div className="subtitle">connect</div>
            <div className="user">
                <Avatar src='/assets/avatars/user4.jpeg' round="50px" size="30" fgColor="#357edd" color="#d1dff0" />
                <span>   Jodie</span>
            </div>

        </div>
    );
};

export default Header;
