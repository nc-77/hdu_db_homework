import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ defaultState }) {
  const [NavItem] = useState(defaultState);
  let NavItemLogo = NavItem[0];
  let NavItemLinks = NavItem[1];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {NavItemLogo &&
            NavItemLogo.map((Nav) => {
              return (
                <a key={Nav.NavBarName} className="navbar-logo" href="/">
                  {Nav.NavBarName}
                </a>
              );
            })}
          <ul className="nav-menu">
            {NavItemLinks &&
              NavItemLinks.map((Nav) => {
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
