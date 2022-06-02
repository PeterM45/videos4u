import "./VideoItem.css";
import React from "react";

// Component to display the coloumn of videos on the right hand side
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      {/* It displays the thumbnail from the api as well as the title */}
      <img
        style={{ border: "1px solid black", borderRadius: "5px" }}
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
