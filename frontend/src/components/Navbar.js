import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar({ defaultState }) {
  const [NavItem] = useState(defaultState);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            二手交易平台
          </a>
          <ul className="nav-menu active">
            {NavItem.map((Nav) => {
              return (
                <li
                  key={Nav.NavBarName}
                  className="nav-item nav-links"
                  onClick={Nav.SwitchLink}
                >
                  {Nav.NavBarName}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
