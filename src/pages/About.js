import React from "react";
import image from "../images/banner.png";
import "./About.css";

export default function About() {
  return (
    <div className="page-content wrapper">
      <img src={image} alt="data analysis" className="about-img" />
      <br />
      <div className="container">
        <h2>About the Data</h2>
        <p className="description">
          The SOCO Transparency Dashboard is a project that provides the
          community with visualizations of the Sonoma County Sheriff's Office
          Arrest Data. The project uses the public{" "}
          <a
            target="_blank"
            href="https://data.sonomacounty.ca.gov/Public-Safety/Sonoma-County-Sheriff-s-Office-Arrest-Data/f6uf-eqmk"
            rel="noreferrer"
          >
            SOCO Data API{" "}
          </a>
          to generate charts that show the total count of arrests by arresting
          agency and type of arrest. The project features a pie chart that
          displays the distribution of arrests by arresting agency, a bar chart
          that shows the top 10 types of arrests, and a table that presents the
          raw data used to generate the charts.
        </p>

        <p className="description">
          The project relies on the Sonoma County Sheriff's Office Arrest Data
          provided by the SOCO Data API. Users can find more information about
          the API, including documentation and the API endpoint, by visiting the
          provided URLs.
        </p>

        <p className="description">
          The project is licensed under the MIT License, and was created by{" "}
          <a
            target="_blank"
            href="https://github.com/Eric-Cortez/SOCO_Transparency_Dashboard"
            rel="noreferrer"
          >
            Eric Cortez
          </a>
          .
        </p>
      </div>
    </div>
  );
}
