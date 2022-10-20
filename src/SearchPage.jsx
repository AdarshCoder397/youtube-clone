import { TuneOutlined } from "@mui/icons-material";
import React from "react";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
import img from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/t2.jpg";
import img4 from "./img/t3.jpg";
import img5 from "./img/t4.jpg";
import img6 from "./img/t5.jpg";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={img}
        channel="MrBeast"
        verified
        subs="106M"
        noOfVideos={729}
        description="SUBSCRIBE FOR A COOKIE!"
      />
      <hr />
      <div className="uploads">Uploads</div>
      <VideoRow
        title="Survive 100 Days In Circle, Win $500,000"
        views="47M"
        timestamp="11 Days ago"
        image={img2}
        channel="MrBeast"
        subs="106M"
        description="🤑 Sign up for Venmo and use the code MRBEAST to get $20 (no code needed if signing up on desktop)"
      />
      <VideoRow
        title="100 Person Extreme Hide & Seek!"
        views="44M"
        timestamp="23 Days ago"
        image={img3}
        channel="MrBeast"
        subs="106M"
        description="We just opened our very first Beast Burger!! And I’ll be working there all day tomorrow!
        Come visit us in the American Dream Mall :D"
      />
      <VideoRow
        title="I Survived A Plane Crash"
        views="57M"
        timestamp="1 Month ago"
        image={img4}
        channel="MrBeast"
        subs="106M"
        description="Thanks again to the Coast Guard for the lift!"
      />
      <VideoRow
        title="100 Girls Vs 100 Boys For $500,000"
        views="84M"
        timestamp="3 Month ago"
        image={img5}
        channel="MrBeast"
        subs="106M"
        description="Giving away $25k on Current! Sign up and use my code “BEAST250” for a chance to win* "
      />
      <VideoRow
        title="I Built Willy Wonka's Chocolate Factory!"
        views="112M"
        timestamp="5 Month ago"
        image={img6}
        channel="MrBeast"
        subs="106M"
        description="MILK Chocolate 🍫 Win a Tesla or be in a MrBeast video"
      />
    </div>
  );
}

export default SearchPage;
