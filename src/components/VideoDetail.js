import React from "react";

// video detail component, this is to display the title and desctiprion of the video
const VideoDetail = ({ video }) => {
  // If no videos just return Loading
  if (!video) {
    return <div>Loading...</div>;
  }

  // embedded link for video to display
  // This is given a video id from the youtube api
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        {/* iframe is the jsx tag to return a video */}
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        {/* display the video title and description */}
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
