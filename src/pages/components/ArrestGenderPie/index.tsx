import { valueCount } from "../../../utils/helperFunctions.js";
import Plot from "react-plotly.js";
import { ArrestData } from "../../interfaces/interfaces.js";

interface Data {
  type: string;
  values: number[];
  labels: string[];
  text: string[];
  textinfo: string;
  insidetextorientation: string;
}

export default function ArrestGenderPie({
  arrestData,
}: {
  arrestData: ArrestData[];
}) {
  const genderCount = valueCount(arrestData, "gender");
  const data: Data[] = [
    {
      type: "pie",
      values: genderCount ? Object.values(genderCount) : [],
      labels: genderCount ? Object.keys(genderCount) : [],
      text: genderCount
        ? Object.values(genderCount).map((value) => `${value} items`)
        : [],
      textinfo: "label+percent",
      insidetextorientation: "radial",
    },
  ];

  const chartStyle = {
    height: "100%",
    width: "100%",
  };
  const layout = {
    title: "Arrest by Gender",
  };
  return (
    <div className="pie-chart">
      {arrestData ? (
        <Plot
          data={data as Plotly.Data[]}
          style={chartStyle}
          config={{ displayModeBar: false }}
          layout={layout}
          useResizeHandler={true}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
