import React from 'react'

export default function ArrestCount({arrestData}) {

  
  return (
    <div>
      <h3>Total Arrests </h3>
      <span>{arrestData.length}</span>
    </div>
  )
}
