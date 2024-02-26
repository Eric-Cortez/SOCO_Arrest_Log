
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../images/logo256.png";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul className="dropdown">
          <li>
            <button className="menu">
              <span className="menu-icon">&#8801;</span>
            </button>
            <ul>
              <li>
                <NavLink to="/" >
                  Arrest Metrics
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
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
