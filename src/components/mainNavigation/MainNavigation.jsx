import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { Component } from "react";
import logo from "../../media/Logo.png";

import { MainNavigationData } from "./MainNavigationData";

class MainNavigation extends Component {
  render() {
    return (
      <nav className={classes.NavigationItems}>
        <h1 className={classes.logo}>
          Green World Energy
          <img
            className={classes.logoImg}
            src={logo}
            alt="Green World Energy logo"
            width={100}
            height={100}
          />
        </h1>
        <ul className={classes.navMenu}>
          {MainNavigationData.map((item, index) => {
            return (
              <li key={index}>
                <Link className={classes.navLink} to={item.url}>
                  <img className={classes.navLinkIcon} src={item.img} alt={item.alt} />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default MainNavigation;
