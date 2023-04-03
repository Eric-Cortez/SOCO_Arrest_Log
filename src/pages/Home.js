import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";

import ArrestDegreePie from "./components/ArrestDegreePie";

export default function Home() {
  const [arrestData, setArrestData] = useState([]);

  console.log(arrestData)
  const socoEnpoint =
    "https://data.sonomacounty.ca.gov/resource/f6uf-eqmk.json";

  useEffect(() => {
    getDataWithFetch();
  }, []);

  const getDataWithFetch = async () => {
    const response = await fetch(socoEnpoint);
    const jsonData = await response.json();
    setArrestData(jsonData);
  };

 

  return (
    <div className="page-content">
      <h2>Arrests Dashboard</h2>
      <div className="dashboard">
        <div>
          <h3>Total Arrests </h3>
          <span>{arrestData.length}</span>
        </div>
        <ArrestDegreePie arrestData={arrestData}/>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>

      </div>
    </div>
  );
}
