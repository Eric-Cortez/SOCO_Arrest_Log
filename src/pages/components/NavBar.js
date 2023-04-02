import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <h2 id="nav-header">SOCO Transparency Dashboard</h2>
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
