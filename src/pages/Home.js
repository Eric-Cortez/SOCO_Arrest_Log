import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";

import ArrestDegreePie from "./components/ArrestDegreePie";
import ArrestCount from "./components/ArrestCount";
import ArrestGenderPie from "./components/ArrestGenderPie";
import ArrestLocation from "./components/ArrestLocation";

export default function Home() {
  const [arrestData, setArrestData] = useState([]);

  console.log(arrestData);
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
        <ArrestCount arrestData={arrestData} />
        <ArrestDegreePie arrestData={arrestData} />
        <ArrestGenderPie arrestData={arrestData} /> <div></div>
        <ArrestLocation arrestData={arrestData} />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
