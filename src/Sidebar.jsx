import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow.jsx'
import HomeIcon from '@mui/icons-material/Home'
import Explore from '@mui/icons-material/Explore'
import WhatShotIcon from '@mui/icons-material/Whatshot'
import SubscriptionIcon from '@mui/icons-material/Subscriptions'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import OnDemandVideoIcon from '@mui/icons-material/OndemandVideo'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={HomeIcon}title="Home"/>
        <SidebarRow Icon={Explore} title="Explore"/>
        <SidebarRow Icon={WhatShotIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionIcon} title="Subscription"/>
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={OnDemandVideoIcon} title="Your Videos"/>
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
        <hr />
    </div>
  )
}

export default Sidebar