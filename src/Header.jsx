import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcom from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationIcon from "@mui/icons-material/Notifications";
import { Avatar, IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          alt="logo"
        />
      </div>
      <div className="header_input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header_inputButton" />
      </div>
      <div className="header_icons">
        <IconButton>
          <VideoCallIcom className="icon"/>
        </IconButton>
        <IconButton>
          <AppsIcon className="icon"/>
        </IconButton>
        <IconButton>
          <NotificationIcon className="icon"/>
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
