import React, { useState } from "react";
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
                  onClick={Nav.ToggleLink}
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
