import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [arrestData, setArrestData] = useState([]);
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
  console.log(arrestData);
  return (
    <div className="page-content">
      <h2>Arrests Dashboard</h2>
    </div>
  );
}
