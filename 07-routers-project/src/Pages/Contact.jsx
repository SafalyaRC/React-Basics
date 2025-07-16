import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate();
  return (
    <div>
      Contacts Page
      <br />
      <button onClick={()=>navigate('info')}>Contact Info</button>
      <button onClick={()=>navigate('form')}>Contact Form</button>
    </div>
  )
}

export default Contact
