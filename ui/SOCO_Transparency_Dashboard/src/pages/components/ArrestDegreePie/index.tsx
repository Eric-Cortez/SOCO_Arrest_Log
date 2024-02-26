import Plot from "react-plotly.js";
import { valueCount } from "../../../utils/helperFunctions.ts";
import { ArrestData } from "../../interfaces/interfaces.ts";

interface Data {
  type: string;
  values: unknown[];
  labels: string[];
  text: string[];
  textinfo: string;
  insidetextorientation: string;
}

export default function ArrestDegreePie({
  arrestData,
}: {
  arrestData: ArrestData[];
}) {
  const types = valueCount(arrestData, "arrestdegree");

  const data: Data[] = [
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
  };

  return (
    <div className="pie-chart">
      {arrestData ? (
        <Plot
          data={data as Plotly.Data[]}
          style={chartStyle}
          layout={layout}
          config={{ displayModeBar: false }}
          useResizeHandler={true}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
