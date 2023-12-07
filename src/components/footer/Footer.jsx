import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { withTranslation } from "react-i18next";

const Footer = ({ t }) => {
  return (
    //Legal notes with translation of i18n
    //Tranlsation information are located in public/assets/local
    <footer className="footer">
      <div className="footerContent">
        <p>
          {t("footer_all_rights")}{" "}
          <Link to="/overus">{t("footer_legal_notice")}</Link>
        </p>
      </div>
    </footer>
  );
};

export default withTranslation()(Footer);
