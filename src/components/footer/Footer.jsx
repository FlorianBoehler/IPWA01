import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { withTranslation } from "react-i18next";

// Footer component with internationalization support
const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="footerContent">
        {/* Footer text with dynamic content translated via i18next */}
        <p>
          {t("footer_all_rights")}{" "} 
          {/* Link to OverUs page  */}
          <Link to="/overus">{t("footer_legal_notice")}</Link>
        </p>
      </div>
    </footer>
  );
};


export default withTranslation()(Footer);
