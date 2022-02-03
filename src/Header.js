import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

function Header() {
    const [inputSearch, setInputSearch] = useState('');
        return (
        <div className = 'header'>
            <div className='header__left'>
                <MenuIcon/>
                <img
                   className='header__logo'
                   src = 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
                   alt = ''
                 />
            </div>
            <div className='header__input'>
                <input
                  type = 'text'
                  placeholder='search'
                  onChange={e => setInputSearch(e.target.value)}
                  value = {inputSearch}
                 />
                 <SearchIcon className='header__inputButton'/>
            </div>
            <div className='header__icons'>
                <VideoCallIcon className='header__icon'/>
                <AppsIcon className='header__icon'/>
                <NotificationsIcon className='header__icon'/>
                <Avatar  src='https://avatars.githubusercontent.com/u/51009293?s=60&v=4' />
            </div>
        </div>
    )
}

export default Header;
