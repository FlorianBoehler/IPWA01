import React from "react";
import { Link } from "react-router-dom";
import Video from "../components/videoMain/VideoMain";
import "./MainPage.css";
import { withTranslation } from "react-i18next";

function MainPage({ t }) {
  return (
    //Welcome Page which will shown up by visting the page
    <div className="contentContainer">
      <div className="welcomeText">
        <h2>
        {t("welcome")} <br></br>
        </h2>
        <h1> {t("app_title")}</h1>
        <h2>
        {t("of")}
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
            <h3>{t("compare_co2_Values")}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withTranslation() (MainPage);
