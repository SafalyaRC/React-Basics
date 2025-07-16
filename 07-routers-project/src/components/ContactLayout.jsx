import React from 'react'
import { Outlet } from 'react-router-dom'
import Contact from '../Pages/Contact'

function ContactLayout() {
  return (
    <div>
      <Contact/>
      <Outlet/>
    </div>
  )
}

export default ContactLayout
