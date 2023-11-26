import React from "react";
import { Link } from "react-router-dom";
import Video from "../components/videoMain/VideoMain";
import "./MainPage.css";

function MainPage() {
  return (
    <div>
      <dvi className="welcomeText">
        <p>
          Welcome to the CO2 Overview Table of <br></br>GREEN FUTURE ENERGY
        </p>
      </dvi>
      <div className="videoOverlayContainer">
        <div className="videoContainer">
          <Video />
        </div>
        <div className="overlayContent">
          <p>Click Here to Start</p>
          <Link to="/table" className="btn btn-secondary">
            Compare CO₂ Values
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
