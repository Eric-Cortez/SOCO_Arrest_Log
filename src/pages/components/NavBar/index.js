import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../images/logo256.png";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <img id="logo" src={logo} alt="Logo" />
            <h1 id="nav-header">SOCO Transparency Dashboard</h1>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active-link" exact>
                  Arrests
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active-link" exact>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
