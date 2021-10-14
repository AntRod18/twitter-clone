import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* {Twitter icon} */}
            <TwitterIcon />

            <SidebarOption Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
            
        </div>
    )
}

export default Sidebar
