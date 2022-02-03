import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

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
                <h1>More Icons</h1>
            </div>
        </div>
    )
}

export default Header;
