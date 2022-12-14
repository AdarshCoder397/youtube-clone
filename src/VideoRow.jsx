import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videorow">
      <img src={image} alt="" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videoRow_title">
          {channel} ▪️ {" "}
          <span className="videoRow_subs">
            <span className="videoRow_subNumber">{subs}</span> Subscribers
          </span>{" "}▪️ {views} Views ▪️ {timestamp}
        </p>
        <p className="videoRow_description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
