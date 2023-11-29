import React from "react";
import { Link } from "react-router-dom";
import Video from "../components/videoMain/VideoMain";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="contentContainer">
      <div className="welcomeText">
        <h2>
          Welcome <br></br> to the <br></br>
        </h2>
        <h1> CO2 Overview Table </h1>
        <h2>
          of
          <br></br>GREEN FUTURE ENERGY
        </h2>
      </div>
      <div className="videoOverlayContainer">
        <div className="videoContainer">
          <Video />
        </div>
        <div className="overlayContent">
          <Link to="/table" className="btn btn-secondary">
            <h3>Compare CO₂ Values</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
