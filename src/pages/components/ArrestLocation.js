import React from "react";
import Plot from "react-plotly.js";
import { valueCount } from "../../utils/helperFunctions.js";

export default function ArrestLocation({ arrestData }) {
  const location = valueCount(arrestData, "arrestcity");

  const data = [
    {
      x: location ? Object.keys(location) : [],
      y: location ? Object.values(location) : [],
      type: "bar",
      text: location ? Object.values(location).map(String) : [],
      textposition: "auto",
      hoverinfo: "none",
      marker: {
        color: "rgb(158,202,225)",
        opacity: 0.6,
        line: {
          color: "rgb(8,48,107)",
          width: 1.5,
        },
      },
      //   options: {
      //       indexAxis: 'y',
      //       scales: {
      //           y: {
      //               ticks: {
      //                   beginAtZero: true,
      //                   stepSize: 1,
      //               }
      //           }
      //       }
      //   },
    },
  ];

  const layout = {
    title: "Arrest by Location",
    xaxis: { title: "City" },
    yaxis: { title: "Number of Arrests" },
  };
  return (
    <div>
      <Plot data={data} layout={layout} />
    </div>
  );
}
