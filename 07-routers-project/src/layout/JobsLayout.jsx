import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
      <h2>Current Job Openings</h2>
      <Outlet/>
    </div>
  )
}

export default JobsLayout
