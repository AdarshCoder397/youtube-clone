import React from "react";
import VideoCard from "./VideoCard";
import "./Videos.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/1_logo.jpg";
import img4 from "./img/3.jpg";
import img5 from "./img/3_logo.jpg";
import img6 from "./img/4.jpg";
import img7 from "./img/4_logo.jpg";
import img8 from "./img/5.jpg";
import img9 from "./img/5_logo.jpg";

function Videos() {
  return (
    <div className="videos">
      <h2>Recommended</h2>
      <div className="rec_videos">
        <VideoCard
          title="I Gave My 100,000,000th Subscriber An Island"
          image={img1}
          views="74M Views"
          timestamp="2 Months ago"
          channelImage={img3}
          channel="MrBeast"
        />
        <VideoCard
          title="5 BEST Purchases That Will CHANGE YOUR LIFE! | Ishan Sharma"
          image={img4}
          views="30,903 Views"
          timestamp="1 Day ago"
          channelImage={img5}
          channel="Ishan Sharma"
        />
        <VideoCard
          title="Survive 100 Days In Circle, Win $500,000"
          image={img2}
          views="47M Views"
          timestamp="11 Days ago"
          channelImage={img3}
          channel="MrBeast"
        />
        <VideoCard
          title="I Gave Students ₹100,000 on Omegle (Part 2)"
          image={img6}
          views="2,782,966 Views"
          timestamp="7 Day ago"
          channelImage={img7}
          channel="Triggered Insaan"
        />
        <VideoCard
          title="I Tried 7 Weird Gadgets!"
          image={img8}
          views="1,033,762 Views"
          timestamp="3 Day ago"
          channelImage={img9}
          channel="Tech Burner"
        />{" "}
        <VideoCard
          title="I Gave My 100,000,000th Subscriber An Island"
          image={img1}
          views="74M Views"
          timestamp="2 Months ago"
          channelImage={img3}
          channel="MrBeast"
        />
        <VideoCard
          title="5 BEST Purchases That Will CHANGE YOUR LIFE! | Ishan Sharma"
          image={img4}
          views="30,903 Views"
          timestamp="1 Day ago"
          channelImage={img5}
          channel="Ishan Sharma"
        />
        <VideoCard
          title="Survive 100 Days In Circle, Win $500,000"
          image={img2}
          views="47M Views"
          timestamp="11 Days ago"
          channelImage={img3}
          channel="MrBeast"
        />
        <VideoCard
          title="I Gave Students ₹100,000 on Omegle (Part 2)"
          image={img6}
          views="2,782,966 Views"
          timestamp="7 Day ago"
          channelImage={img7}
          channel="Triggered Insaan"
        />
        <VideoCard
          title="I Tried 7 Weird Gadgets!"
          image={img8}
          views="1,033,762 Views"
          timestamp="3 Day ago"
          channelImage={img9}
          channel="Tech Burner"
        />{" "}
        <VideoCard
          title="I Gave My 100,000,000th Subscriber An Island"
          image={img1}
          views="74M Views"
          timestamp="2 Months ago"
          channelImage={img3}
          channel="MrBeast"
        />
        <VideoCard
          title="5 BEST Purchases That Will CHANGE YOUR LIFE! | Ishan Sharma"
          image={img4}
          views="30,903 Views"
          timestamp="1 Day ago"
          channelImage={img5}
          channel="Ishan Sharma"
        />
        <VideoCard
          title="Survive 100 Days In Circle, Win $500,000"
          image={img2}
          views="47M Views"
          timestamp="11 Days ago"
          channelImage={img3}
          channel="MrBeast"
        />
        <VideoCard
          title="I Gave Students ₹100,000 on Omegle (Part 2)"
          image={img6}
          views="2,782,966 Views"
          timestamp="7 Day ago"
          channelImage={img7}
          channel="Triggered Insaan"
        />
        <VideoCard
          title="I Tried 7 Weird Gadgets!"
          image={img8}
          views="1,033,762 Views"
          timestamp="3 Day ago"
          channelImage={img9}
          channel="Tech Burner"
        />
      </div>
    </div>
  );
}

export default Videos;
