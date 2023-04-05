import React from "react";
import Plot from "react-plotly.js";
import { valueCount } from "../../utils/helperFunctions.js";

export default function ArrestDegreePie({ arrestData }) {
  const types = valueCount(arrestData, "arrestdegree");

  let data = [
    {
      type: "pie",
      values: types ? Object.values(types) : [],
      labels: types ? Object.keys(types) : [],
      text: types ? Object.values(types).map((value) => `${value} items`) : [],
      textinfo: "label+percent",
      insidetextorientation: "radial",
    },
  ];

  const chartStyle = {
    height: "100%",
    width: "100%",
  };

  const layout = {
    title: "Arrest by Degree",
    displayModeBar: false,
  };

  return (
    <div className="pie-chart">
      {arrestData ? (
        <Plot data={data} style={chartStyle} layout={layout} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
