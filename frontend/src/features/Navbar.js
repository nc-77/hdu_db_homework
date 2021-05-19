import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ defaultState }) {
  const [NavItem] = useState(defaultState);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
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
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
