import React from 'react';
import './VideoCard.css';
import Avatar from '@mui/material/Avatar';

function VideoCard() {
  return <div className='videoCard'>
      <img
        src = "https://i.ytimg.com/vi/4RTte4RA1Sg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOdlLEgQtra4DmRSoMZCCCN8mKmw"
        className = "videoCard__thumbnail"
       />
       <div className='videoCard__info'>
           <Avatar
             className = "videoCard__avatar"
           />
           <div className='video__text'>
              <h4>Text</h4>
              <p>Channel Name</p>
              <p>
                view * timestamp
              </p>
           </div>
       </div>
  </div>;
}

export default VideoCard;
