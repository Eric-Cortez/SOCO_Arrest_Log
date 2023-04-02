import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from '../../images/logo256.png';

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img id="logo" src={logo} alt="Logo" />
          <h2 id="nav-header">SOCO Transparency Dashboard</h2>
        </div>

        <ul>
          <li>
            <Link to="/">Arrests</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
