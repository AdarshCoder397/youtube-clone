import React, { useEffect, useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcom from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationIcon from "@mui/icons-material/Notifications";
import { Avatar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  const [seed,setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  },[])
  
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link to={`/`}>
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header_input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>
      <div className="header_icons">
        <IconButton>
          <VideoCallIcom className="icon" />
        </IconButton>
        <IconButton>
          <AppsIcon className="icon" />
        </IconButton>
        <IconButton>
          <NotificationIcon className="icon" />
        </IconButton>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      </div>
    </div>
  );
}

export default Header;
