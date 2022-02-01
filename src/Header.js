import React from 'react';
import './Header.css';



function Header() {
    return (
        <div className = "header">
            <div className='header__left'>
                <h1>Logo</h1>
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
