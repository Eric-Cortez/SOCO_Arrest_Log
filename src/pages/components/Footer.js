import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            {/* <i className="fa-brands fa-github-alt"></i> */}
            <a
              href="https://github.com/Eric-Cortez/SOCO_Transparency_Dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
