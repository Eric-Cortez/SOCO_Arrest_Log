import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <h2>SOCO Transparency Dashboard</h2>
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
