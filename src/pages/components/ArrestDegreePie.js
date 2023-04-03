import React from 'react'
import Plot from 'react-plotly.js';

export default function ArrestDegreePie({ arrestData }) {

    function valueCount(arrestData) {
        let types = {};

        for (let i = 0; i < arrestData.length; i++) {
            let record = arrestData[i].arrestdegree;
            if (!types[record]) {
                types[record] = 1
            } else {
                types[record] += 1
            }

        }
        return types
    }
    const types = valueCount(arrestData)


    let data = [{
        type: "pie",
        values: types ? Object.values(types) : [],
        labels: types ? Object.keys(types) : [],
        text: types ? Object.values(types).map(value => `${value} items`) : [],
        textinfo: "label+percent",
        insidetextorientation: "radial"
    }];

   const chartStyle = {
    height: "100%",
    width: "100%"
   }

    return (
        <div>
            <h3>Arrest Degree</h3>
            {arrestData ?
                (<Plot data={data} style={chartStyle} />) : (<div>Loading...</div>)}

        </div>
    )
}
