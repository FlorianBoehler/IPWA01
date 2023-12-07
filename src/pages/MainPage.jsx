import React from "react";
import { Link } from "react-router-dom";
import Video from "../components/videoMain/VideoMain";
import "./MainPage.css";

function MainPage() {
  return (
    //Welcome Page which will shown up by visting the page
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
      {/*Video with a looped video to generate a modern UI experince*/}
      <div className="videoOverlayContainer">
        <div className="videoContainer">
          <Video />
        </div>
        {/*Button with a direct link to the table page*/}
        <div className="overlayContent">
          <Link to="/table" id="linkToTable" className="btn btn-secondary">
            <h3>Compare CO₂ Values</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
