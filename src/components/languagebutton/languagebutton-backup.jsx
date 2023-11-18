import React from "react";
import classes from "./LanguageButton.module.css"
import globe from "../../media/icons/globe.png";

function LanguageButton() {
  return (
    <div className={classes.languageButtonContainer}>
      <img className={classes.logo} src={globe} alt="Globe Icon" />
    </div>
  );
}

export default LanguageButton;
