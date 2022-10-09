import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home'
import Explore from '@mui/icons-material/Explore'
import WhatShotIcon from '@mui/icons-material/Whatshot'
import SubscriptionIcon from '@mui/icons-material/Subscriptions'

import SidebarRow from './SidebarRow.jsx'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={HomeIcon}title="Home"/>
        <SidebarRow Icon={Explore} title="Explore"/>
        <SidebarRow Icon={WhatShotIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionIcon} title="Subscription"/>
        <hr />
    </div>
  )
}

export default Sidebar