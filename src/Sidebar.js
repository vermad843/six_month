import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Sidebar.css';

function Sidebar() {
  return <div className='sidebar'>
       <h1>I am Sidebar</h1>
       <SidebarRow Icon = {HomeIcon} title = 'Home'/>
       <SidebarRow Icon = {WhatshotIcon} title = 'Trending'/>
       <SidebarRow Icon = {SubscriptionsIcon} title = 'Subscription'/>
       <SidebarRow Icon = {VideoLibraryIcon} title = 'Library'/>
       <SidebarRow Icon = {HistoryIcon} title = 'History'/> 
       <SidebarRow Icon = {OndemandVideoIcon} title = 'Your videos'/>  
       <SidebarRow Icon = {WatchLaterIcon} title = 'Watch Later'/>  
       <SidebarRow Icon = {ThumbUpIcon} title = 'Liked videos'/>  
       <SidebarRow Icon = {ExpandMoreIcon} title = 'Show more'/> 
  </div>;
}

export default Sidebar;
