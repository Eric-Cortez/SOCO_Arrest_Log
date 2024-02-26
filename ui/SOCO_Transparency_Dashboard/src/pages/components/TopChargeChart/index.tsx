import { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { ArrestData } from "../../interfaces/interfaces";

export default function TopChargeChart({
  arrestData,
}: {
  arrestData: ArrestData[];
}) {
  const [topCharges, setTopCharges] = useState<string[]>([]);
  const [chargeCounts, setChargeCounts] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    const newChargeCounts: { [key: string]: number } = {};
    arrestData.forEach((arrest: ArrestData) => {
      const charges: string[] = arrest.chargedescription
        .split("<br/>")
        .filter((charge) => charge !== "----------");
      charges.forEach((charge) => {
        const chargeParts = charge.trim().split(";");
        if (chargeParts.length > 0) {
          const shortName = chargeParts[chargeParts.length - 1];
          newChargeCounts[shortName] = (newChargeCounts[shortName] || 0) + 1;
        }
      });
    });

    const topCharges = Object.keys(newChargeCounts)
      .sort((a, b) => newChargeCounts[b] - newChargeCounts[a])
      .slice(0, 10);

    setTopCharges(topCharges);
    setChargeCounts(newChargeCounts);
  }, [arrestData]);

  if (topCharges.length === 0) {
    return null;
  }

  const data: Plotly.Data[] = [
    {
      x: topCharges.map((charge) => chargeCounts[charge]),
      y: topCharges,
      type: "bar",
      orientation: "h",
    },
  ];
  const layout: Partial<Plotly.Layout> = {
    title: "Arrests by Charge",
     font: {
      size: 8
    },
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
