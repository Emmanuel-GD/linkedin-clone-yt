import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOptions from './HeaderOptions';
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@material-ui/icons'
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={Home} title="Home" />
                <HeaderOptions Icon={SupervisorAccount} title="My Network" />
                <HeaderOptions Icon={BusinessCenter} title="jobs" />
                <HeaderOptions Icon={Chat} title="Chat" />
                <HeaderOptions Icon={Notifications} title="Notifications" />
                <HeaderOptions Icon={Avatar} title="Notifications" />
            </div>
        </div>
    )
}

export default Header
