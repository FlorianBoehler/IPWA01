import React, { useEffect, useState } from "react";

import "./LanguageButton.css";
import { useTranslation } from "react-i18next";
import { LanguageButtonData } from "./LanguageButtonData";
import "../../../node_modules/flag-icon-css/css/flag-icons.min.css";
import globeIcon from "../../media/icons/globe2.svg";
import i18next from "i18next";
import cookies from "js-cookie";

// LanguageButton component for language selection
function LanguageButton() {
  const { t } = useTranslation(); 

  // State to manage current language, defaulting to the value in cookies or 'en'
  const [currentLanguageCode, setCurrentLanguageCode] = useState(
    cookies.get("i18next") || "en"
  );

  // Effect to update page title and text direction based on language
  useEffect(() => {
    const currentLanguage = LanguageButtonData.find(
      (l) => l.code === currentLanguageCode
    );

    if (currentLanguage) {
      document.title = t("app_title"); // Update page title using translated value
      const direction = currentLanguage.dir || "ltr"; // Set text direction based on language, Fallback is ltr
      document.body.dir = direction;
    }
  }, [currentLanguageCode, t]);

  // Function to handle language change
  const handleLanguageChange = (code) => {
    i18next.changeLanguage(code); 
    setCurrentLanguageCode(code); 
  };

  return (
    <div className="dropdownContainer">
      <div className="dropdown">
        <button
          id="languageButton"
          className="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="globeIcon" src={globeIcon} alt="Globe Icon" />
        </button>
        <ul className="dropdown-menu">
          {/* Label for language dropdown */}
          <li>
            <span className="dropdown-item-text">{t("language")}</span>
          </li>
          {/* Dynamically generating language options */}
          {LanguageButtonData.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <button
                className="dropdown-item"
                onClick={() => handleLanguageChange(code)}
                disabled={code === currentLanguageCode} // Disable if already selected
              >
                <span
                  className={`flag-icon flag-icon-${country_code} mx-2`}
                  style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                ></span>
                {name} {/* Display language name */}
              </button>
            </li>
          ))}
        </ul>
      </div>{" "}
    </div>
  );
}

export default LanguageButton;