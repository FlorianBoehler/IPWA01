import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
import { Component } from "react";
import menuIcon from "../../media/icons/list.svg";
import crossIcon from "../../media/icons/x-lg.svg";

import { MainNavigationData } from "./MainNavigationData";
import { withTranslation } from "react-i18next";

class MainNavigation extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  closeMenu = () => {
    this.setState({ clicked: false });
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <nav className="NavigationItems">
          <h2 className="logoText" onClick={this.closeMenu}>
            {t("app_title")}
          </h2>
          <div className="MenuSmallScreen">
            <img
              className="menuBar"
              src={this.state.clicked ? crossIcon : menuIcon}
              alt="MenuBar Icon"
              onClick={this.handleClick}
            />
          </div>
          <ul
            className={
              this.state.clicked ? "navMenuActive" : "navMenu"
            }
          >
            {MainNavigationData.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="navLink"
                    to={item.url}
                    onClick={this.closeMenu}
                  >
                    <img
                      className="navLinkIcon"
                      src={item.img}
                      alt={item.alt}
                    />
                    {t(item.title)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default withTranslation()(MainNavigation);
