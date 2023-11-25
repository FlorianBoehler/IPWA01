import React, { useEffect, useState } from "react";

import classes from "./LanguageButton.module.css";
import { useTranslation } from "react-i18next";
import { LanguageButtonData } from "./LanguageButtonData";
import "../../../node_modules/flag-icon-css/css/flag-icons.min.css";
import globeIcon from "../../media/icons/globe2.svg";
import i18next from "i18next";
import cookies from "js-cookie";

function LanguageButton() {
  const { t } = useTranslation();

  const [currentLanguageCode, setCurrentLanguageCode] = useState(
    cookies.get("i18next") || "en"
  );

  useEffect(() => {
    const currentLanguage = LanguageButtonData.find(
      (l) => l.code === currentLanguageCode,
      (document.title = t("app_title")) // & Change Title
    );
    const direction = currentLanguage ? currentLanguage.dir : "ltr";
    document.body.dir = direction;
  }, [currentLanguageCode]);

  const handleLanguageChange = (code) => {
    i18next.changeLanguage(code);
    setCurrentLanguageCode(code);
  };

  return (
    <div className={classes.dropdownContainer}>
    <div className={classes.dropdown}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img className={classes.globeIcon} src={globeIcon} alt="Globe Icon" />
      </button>
      <ul className="dropdown-menu">
        <li>
          <span className="dropdown-item-text">{t("language")}</span>
        </li>
        {LanguageButtonData.map(({ code, name, country_code }) => (
          <li key={country_code}>
            <button
              className="dropdown-item"
              onClick={() => handleLanguageChange(code)}
              disabled={code === currentLanguageCode}
            >
              <span
                className={`flag-icon flag-icon-${country_code} mx-2`}
                style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
              ></span>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div> </div>
  );
}

export default LanguageButton;
