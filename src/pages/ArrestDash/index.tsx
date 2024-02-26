import { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
import "./ArrestDash.css";
import Spinner from "../components/Spinner";
import { ArrestData } from "../interfaces/interfaces";

const ArrestCount = lazy(() => import("../components/ArrestCount"));
const ArrestDegreePie = lazy(() => import("../components/ArrestDegreePie"));

const ArrestGenderPie = lazy(() => import("../components/ArrestGenderPie"));
const ArrestLocation = lazy(() => import("../components/ArrestLocation"));
const ArrestsByAgency = lazy(() => import("../components/ArrestsByAgency"));
const TopChargeChart = lazy(() => import("../components/TopChargeChart"));

export default function Home() {
  const [arrestData, setArrestData] = useState<ArrestData[]>([]);
  const url: string =
    "https://data.sonomacounty.ca.gov/resource/f6uf-eqmk.json";

  useEffect(() => {
    getDataWithFetch(url);
  }, []);

  const getDataWithFetch = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("HTTP error! Status: ${response.status}");
      }
      const jsonData = await response.json();
      setArrestData(jsonData);
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div className="page-content">
      <h2 className="pg-header">Arrests Dashboard</h2>
      <Suspense fallback={<Spinner />}>
        <div className="dashboard">
          <Suspense fallback={<Spinner />}>
            <ArrestCount arrestCount={arrestData.length} />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <ArrestDegreePie arrestData={arrestData} />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <ArrestGenderPie arrestData={arrestData} />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <ArrestsByAgency arrestData={arrestData} />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <ArrestLocation arrestData={arrestData} />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <TopChargeChart arrestData={arrestData} />
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
}
