import React, { useState } from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";

// Material Icons
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  // state variables
  const [click, setClick] = useState(false);

  // toggle the icons
  const handleClick = () => setClick(!click);

  const handleHamburgerMenu = click ? <CloseIcon /> : <MenuIcon />;
  const handleActiveLinks = click ? "navbar__links active" : "navbar__links";

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <Link to="/" onClick={handleClick} className="navbar__logo">
            <h3> Sports</h3>
            <SportsBasketballIcon className="navbar__iconBasket" />
          </Link>
          <div className="navbar__icon" onClick={handleClick}>
            {handleHamburgerMenu}
          </div>
        </div>
        <div className="navbar__right">
          <ul className={handleActiveLinks}>
            <li className="navbar__link">
              <Link to="/" onClick={handleClick}>
                Početna
              </Link>
            </li>
            <li className="navbar__link">
              <Link to="/about" onClick={handleClick}>
                O nama
              </Link>
            </li>
            <li className="navbar__link">
              <Link to="/games" onClick={handleClick}>
                Igre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
