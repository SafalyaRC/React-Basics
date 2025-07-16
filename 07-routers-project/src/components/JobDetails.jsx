import React from 'react'
import { useLoaderData } from 'react-router-dom'

function JobDetails() {
    const jobDetailsData=useLoaderData()
  return (
    <div>
      <p>{jobDetailsData.title}</p>
      <p>{jobDetailsData.location}</p>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader= async({params})=>{
    const {id}=params;
    const res=await fetch("http://localhost:5000/jobs/" + id)
    if(!res.ok){
        throw Error("Could not find job details")
    }
    return res.json()
}
