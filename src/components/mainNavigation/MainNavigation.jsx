import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { Component } from "react";
import logo from "../../media/Logo.png";
import menuIcon from "../../media/icons/list.svg";
import crossIcon from "../../media/icons/x-lg.svg";

import { MainNavigationData } from "./MainNavigationData";
import MainPage from "../../pages/main";
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
    const {t} = this.props;
    return (
      <div>
        <nav className={classes.NavigationItems}>
          <h1 className={classes.logo} onClick={this.closeMenu}>
            {t("app_title")} 
            <img
              className={classes.logoImg}
              src={logo}
              alt="Green World Energy logo"
            />
          </h1>
          <div className={classes.MenuSmallScreen}>
            <img
              className={classes.menuBar}
              src={this.state.clicked ? crossIcon : menuIcon}
              alt="MenuBar Icon"
              onClick={this.handleClick}
            />
          </div>
          <ul
            className={
              this.state.clicked ? classes.navMenuActive : classes.navMenu
            }
          >
            {MainNavigationData.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={classes.navLink}
                    to={item.url}
                    onClick={this.closeMenu}
                  >
                    <img
                      className={classes.navLinkIcon}
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
        <MainPage onMainPageClick={this.closeMenu} />
      </div>
    );
  }
}

export default withTranslation()(MainNavigation);
