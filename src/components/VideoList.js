import React from "react";
import VideoItem from "./VideoItem";

// Displaying a number of videos on the right side
// VideoItem is a nested component for VideoList
// VideoList maps through an array of VideoItems to display them
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
