import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Green World Energie</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/overus">Over Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;