import React from "react";
import video from "../../media/videoBackground.mp4";


const VideoMain = () => {
  return (
    <video  autoPlay loop muted>
      <source src={video} type="video/mp4" />
      Ihr Browser unterstützt kein Video.
    </video>
  );
};

export default VideoMain;
