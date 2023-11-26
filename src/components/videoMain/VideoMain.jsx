import React from "react";
import video from "../../media/videoBackground.mp4";
import "./VideoMain.css";

const VideoMain = () => {
  return (
    <video width="800" height="450" controls>
      <source src={video} type="video/mp4" />
      Ihr Browser unterstützt kein Video.
    </video>
  );
};

export default VideoMain;
