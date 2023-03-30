import React, { useEffect, useState } from 'react';
import './App.css';

const socoEnpoint = "https://data.sonomacounty.ca.gov/resource/f6uf-eqmk.json"

function App() {
  const [arrestData, setArrestData] = useState([])

  useEffect(() => {
    getDataWithFetch()
  }, [])

  const getDataWithFetch = async () => {
    const response = await fetch(socoEnpoint)
    const jsonData = await response.json();
    setArrestData(jsonData)
  };
  console.log(arrestData)

  return (
    <div className="App">
      <h2>SOCO Arrest Log Visualization</h2>
      {arrestData && (
        <table className="table">
          <thead>
            <tr>
              {arrestData.length && Object.keys(arrestData[0]).map(columnName => (
                <th key={columnName}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* {arrestData && arrestData.map((record, index) => (
              <tr key={index}>
                {Object.values(record).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))} */}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
