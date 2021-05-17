import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  /* 变化 */
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRAD
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item nav-links"
              onClick={() => {
                console.log(1);
              }}
            >
              Home
            </li>
            <li className="nav-item nav-links">Services</li>
            <li className="nav-item nav-links">Products</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
