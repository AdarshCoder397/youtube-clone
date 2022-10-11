import React from "react";
import VideoCard from "./VideoCard";
import "./Videos.css";
import img from './test.jpeg'

function Videos() {
  return (
    <div className="videos">
      <h2>Recommended</h2>
      <div className="rec_videos">
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        <VideoCard title="Be a pro gamer!" image={img} views="5M Views" timestamp="1 hour ago" channelImage={img} channel="Codewithadarsh"/>
        
      </div>
    </div>
  );
}

export default Videos;
