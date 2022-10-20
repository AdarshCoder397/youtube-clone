import { CheckCircleOutline } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelRow.css'
import logo from './img/m_logo.jpg'

function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow_logo' alt={channel} src={logo} />
        <div className="channelRow_text">
            <h4>{channel} {verified && <CheckCircleOutline/>}</h4>
            <p>{subs} subscribers ▪️ {noOfVideos} Videos</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow