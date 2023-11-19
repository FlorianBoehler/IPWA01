import React from "react";
import { Link } from "react-router-dom";
import classes from "./LanguageButton.module.css";
import { Component } from "react";

import globeIcon from "../../media/icons/globe.png";
import crossIcon from "../../media/icons/cross.png";

import { MainNavigationData } from "./LanguageButtonData";
import MainPage from "../../pages/main";

class LanguageButton extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  closeMenu = () => {
    this.setState({ clicked: false });
  };
  render() {
    return (
      <div>
        <nav className={classes.NavigationItems}>
          
          <div className={classes.MenuSmallScreen}>
            <img
              className={classes.menuBar}
              src={this.state.clicked ? crossIcon : globeIcon}
              alt="Globe Icon"
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
                    {item.title}
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

export default LanguageButton;