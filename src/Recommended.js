import React from 'react';
import VideoCard from './VideoCard';

function Recommended() {
  return <div className='recommended'>
        <VideoCard
          title = "Happy Birthday by Maninder butter"
          views = "2.3M views"
          timestamp = "3 days ago"
          channelImage = "https://avatars.githubusercontent.com/u/51009293?s=60&v=4"
          channel = "EverythingMusic"
          image = "https://i.ytimg.com/vi/4RTte4RA1Sg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOdlLEgQtra4DmRSoMZCCCN8mKmw"
        />
  </div>;
}

export default Recommended;
