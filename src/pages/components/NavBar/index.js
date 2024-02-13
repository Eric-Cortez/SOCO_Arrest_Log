import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../images/logo256.png";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul className="dropdown">
          <li>
            <a href="#" class="menu"><span class="menu-icon">&#8801;</span></a>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Arrest Metrics

                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact>
                  About
                </NavLink>
              </li>
            </ul>
          </li>

        </ul>

        <img id="logo" src={logo} alt="Logo" />
        <h1 id="nav-header">SOCO Transparency Dashboard</h1>

      </nav>
    </>
  );
}
