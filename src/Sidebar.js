import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import './Sidebar.css';

function Sidebar() {
  return <div className='sidebar'>
       <h1>I am Sidebar</h1>
       <SidebarRow Icon = {HomeIcon} title = 'Home'/>
       <SidebarRow Icon = {HomeIcon} title = 'Trending'/>
       <SidebarRow Icon = {HomeIcon} title = 'Subscription'/>
       <SidebarRow Icon = {HomeIcon} title = 'Library'/>
       <SidebarRow Icon = {HomeIcon} title = 'History'/> 
       <SidebarRow Icon = {HomeIcon} title = 'Your videos'/>  
       <SidebarRow Icon = {HomeIcon} title = 'Watch Later'/>  
       <SidebarRow Icon = {HomeIcon} title = 'Liked videos'/>  
       <SidebarRow Icon = {HomeIcon} title = 'Show more'/> 
  </div>;
}

export default Sidebar;
