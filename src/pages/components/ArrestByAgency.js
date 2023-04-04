import React from 'react';
import Plot from 'react-plotly.js';

function ArrestsByAgency({ arrestData }) {
  const arrestsByAgency = {};
  arrestData.forEach((arrest) => {
    const agency = arrest.fullagencyname;
    arrestsByAgency[agency] = (arrestsByAgency[agency] || 0) + 1;
  });

  const agencies = Object.keys(arrestsByAgency).sort(
    (a, b) => arrestsByAgency[b] - arrestsByAgency[a]
  );

  const plotData = [
    {
      type: 'bar',
      orientation: 'h',
      x: agencies.map((agency) => arrestsByAgency[agency]),
      y: agencies,
      marker: {
        color: 'rgb(0, 153, 255)',
      },
    },
  ];

  const plotLayout = {
    title: 'Arrests by Agency',
    xaxis: {
      title: 'Number of Arrests',
      automargin: true,
    },
    yaxis: {
      automargin: true,
    },
    margin: {
      l: 120,
      r: 20,
      t: 60,
      b: 20,
    },
  };

  return (
    <div className="bar-chart">
      <Plot data={plotData} layout={plotLayout} />
    </div>
  );
}

export default ArrestsByAgency;
