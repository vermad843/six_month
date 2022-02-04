import React from 'react';
import './SidebarRow.css';

function SidebarRow({Icon}) {
  return <div className='sidebarRow'>
       <Icon/>
       <h2>Title</h2>
  </div>;
}

export default SidebarRow;
