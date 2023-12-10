import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
import menuIcon from "../../media/icons/list.svg";
import crossIcon from "../../media/icons/x-lg.svg";
import { MainNavigationData } from "./MainNavigationData";
import { withTranslation } from "react-i18next";

// MainNavigation component for site navigation
class MainNavigation extends Component {
  state = { clicked: false }; // State to track if menu is clicked/open

  // Function to toggle the clicked state
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // Function to close the menu
  closeMenu = () => {
    this.setState({ clicked: false });
  };

  render() {
    const { t } = this.props; // Translation function from i18next

    return (
      <div>
        <nav className="NavigationItems">
          {/* Clickable logo text */}
          <h2 className="logoText" onClick={this.closeMenu}>
            {t("app_title")}
          </h2>

          {/* Icon for small screen menu */}
          <div className="MenuSmallScreen">
            <img
              className="menuBar"
              src={this.state.clicked ? crossIcon : menuIcon}
              alt="MenuBar Icon"
              onClick={this.handleClick}
            />
          </div>

          {/* Navigation menu items */}
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
                    {t(item.title)} {/* Translated title */}
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