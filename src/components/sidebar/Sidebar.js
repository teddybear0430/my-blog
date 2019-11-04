import React from 'react';

import Profile from './Profile.js';
import Tags from './Tags.js';
import ('../../styles/sidebar.scss');

const Sidebar = () => {
     return (
         <div id="sidebar">
             <div className="sidebar-container">
                 <Profile />
                 <Tags />
             </div>
         </div>
     )
}

export default Sidebar;
