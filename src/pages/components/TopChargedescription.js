import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

export default function TopChargedescription({ arrestData }) {
  const [topCharges, setTopCharges] = useState([]);
  const [chargeCounts, setChargeCounts] = useState([]);

  useEffect(() => {
    const chargeCounts = {};
    arrestData.forEach((arrest) => {
     
      const charges = arrest.chargedescription.split("<br/>").filter(charge => charge !== '----------');
      charges.forEach((charge) => {
      
        charge = charge.trim().split(";");

        if (charge) {
          const shortName = charge[charge.length - 1];
          chargeCounts[shortName] = (chargeCounts[shortName] || 0) + 1;
        }
      });
    });

    const topCharges = Object.keys(chargeCounts)
      .sort((a, b) => chargeCounts[b] - chargeCounts[a])
      .slice(0, 10);

    setTopCharges(topCharges);
    setChargeCounts(chargeCounts);
  }, [arrestData]);

  if (topCharges.length === 0) {
    return null;
  }

  const data = [
    {
      x: topCharges.map((charge) => chargeCounts[charge]),
      y: topCharges,
      type: "bar",
      orientation: "h",
    },
  ];
  const layout = {
    title: "Arrests by Charge",
    margin: {
      l: 150,
      r: 20,
      t: 60,
      b: 50,
    },
    xaxis: { title: "Number of Arrests" },
    yaxis: {
      title: "Charge description",
      tickmode: "linear",
      automargin: true,
      dtick: 1,
    },
  };

  return (
    <div className="bar-chart">
      <Plot
        data={data}
        layout={layout}
        config={{ displayModeBar: false }}
        useResizeHandler={true}
      />
    </div>
  );
}
