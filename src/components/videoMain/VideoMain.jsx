import React from "react";
import video from "../../media/videoBackground.mp4";

// VideoMain component for displaying a background video
const VideoMain = () => {
  return (
    // Video element setup for autoplay, loop, and muted
    <video autoPlay loop muted>
      {/* Source of the video. 'video' is imported from the media directory */}
      <source src={video} type="video/mp4" />
      {/* Fallback text for browsers that don't support the video tag */}
      Your browser doesn't support video.
    </video>
  );
};

export default VideoMain;
