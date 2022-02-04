import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import './Sidebar.css';

function Sidebar() {
  return <div className='sidebar'>
       <h1>I am Sidebar</h1>
       <SidebarRow Icon = {HomeIcon}/>
  </div>;
}

export default Sidebar;
