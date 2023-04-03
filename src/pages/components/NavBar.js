import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/" activeClassName="active-link" exact>Arrests</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link" exact>About</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
