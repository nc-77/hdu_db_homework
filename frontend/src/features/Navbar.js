import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ defaultState }) {
  const [NavItem] = useState(defaultState);
<<<<<<< HEAD
  let NavItemLogo = NavItem[0];
  let NavItemLinks = NavItem[1];
=======
>>>>>>> c994b8794df4f0a755948196a78729ae007187e0

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
<<<<<<< HEAD
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
=======
          {NavItem[0].map((Nav) => {
            return (
              <a key={Nav.NavBarName} className="navbar-logo" href="/">
                {Nav.NavBarName}
              </a>
            );
          })}
          <ul className="nav-menu">
            {NavItem[1].map((Nav) => {
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
>>>>>>> c994b8794df4f0a755948196a78729ae007187e0
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
