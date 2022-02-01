import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
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
                <h1>Input</h1>
            </div>
            <div className='header__icons'>
                <h1>More Icons</h1>
            </div>
        </div>
    )
}

export default Header;
