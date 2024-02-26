import Plot from "react-plotly.js";
import { valueCount } from "../../../utils/helperFunctions.js";
import { ArrestData } from "../../interfaces/interfaces.js";

export default function ArrestLocation({ arrestData }: { arrestData: ArrestData[] }) {
  const location = valueCount(arrestData, "arrestcity");

  const data: Plotly.Data[] = [
    {
      x: location ? Object.keys(location) : [],
      y: location ? Object.values(location) : [],
      type: "bar",
      text: location ? Object.values(location).map(String) : [],
      textposition: "auto",
      hoverinfo: "none",
      marker: {
        color: "rgb(32,119,180)",
        opacity: 0.6,
        line: {
          color: "rgb(8,48,107)",
          width: 2,
        },
      },
    },
  ];

  const layout: Partial<Plotly.Layout> = {
    title: "Arrest by Location",
    font: {
      size: 10,
    },
    xaxis: { title: "City" },
    yaxis: {
      title: "Number of Arrests",
      tickmode: "linear",
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
