import React from 'react'
import { useEffect, useState } from 'react'

export default function Home() {
    const [arrestData, setArrestData] = useState([])
    const socoEnpoint = "https://data.sonomacounty.ca.gov/resource/f6uf-eqmk.json"

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
        <div>Arrests Dashboard</div>

    )
}


