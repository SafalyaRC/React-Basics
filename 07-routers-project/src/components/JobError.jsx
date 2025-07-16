import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'


function JobError() {
    const navigate=useNavigate();
    const err=useRouteError();
  return (
    <div>
        <p>{err.message}</p>
      <button onClick={()=>navigate('/')}>go to home page</button>
    </div>
  )
}

export default JobError
