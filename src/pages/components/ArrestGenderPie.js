import React from 'react'
import { valueCount } from "../../utils/helperFunctions.js"
import Plot from 'react-plotly.js';

export default function ArrestGenderPie({ arrestData }) {

    const genderCount = valueCount(arrestData, "gender")
    let data = [{
        type: "pie",
        values: genderCount ? Object.values(genderCount) : [],
        labels: genderCount ? Object.keys(genderCount) : [],
        text: genderCount ? Object.values(genderCount).map(value => `${value} items`) : [],
        textinfo: "label+percent",
        insidetextorientation: "radial"
    }];

    const chartStyle = {
        height: "100%",
        width: "100%"
    }

  return (
    <div>
        <h3>Arrest by Gender</h3>
        {arrestData ? (<Plot data={data} style={chartStyle}/>) : (<div>Loading...</div>)}

    </div>
  )
}
