import React from "react";
import "./ArrestCount.css"; // Import your CSS file

export default function ArrestCount({ arrestData }) {
  return (
    <div className="arrest-count-container">
      <h3>Total Arrests</h3>
      <span className="arrest-count-number">{arrestData.length}</span>
    </div>
  );
}
