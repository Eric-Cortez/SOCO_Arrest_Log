import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="fallback">
      Loading...
      <div className="spinner"></div>
    </div>
  );
}
