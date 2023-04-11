import React, { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
import "./ArrestDash.css";
import Spinner from "../components/Spinner";

const ArrestDegreePie = lazy(() => import("../components/ArrestDegreePie"));
const ArrestCount = lazy(() => import("../components/ArrestCount"));
const ArrestGenderPie = lazy(() => import("../components/ArrestGenderPie"));
const ArrestLocation = lazy(() => import("../components/ArrestLocation"));
const ArrestsByAgency = lazy(() => import("../components/ArrestsByAgency"));
const TopChargeChart = lazy(() => import("../components/TopChargeChart"));

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

  return (
    <div className="page-content">
      <h2 className="pg-header">Arrests Dashboard</h2>
      <Suspense fallback={<Spinner />}>
        <div className="dashboard">
          <ArrestCount arrestData={arrestData} />
          <ArrestDegreePie arrestData={arrestData} />
          <ArrestGenderPie arrestData={arrestData} />
          <ArrestsByAgency arrestData={arrestData} />
          <ArrestLocation arrestData={arrestData} />
          <TopChargeChart arrestData={arrestData} />
        </div>
      </Suspense>
    </div>
  );
}
