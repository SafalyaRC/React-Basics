import React from 'react'
import logo from '../assets/react.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <img src={logo} alt="logo" />

      <NavLink to='/'> Home </NavLink>
      <NavLink to='/prodcuts'> Products </NavLink>
      <NavLink to='/about'>About </NavLink>
      <NavLink to='/contact'>Contact </NavLink>
      <NavLink to='/jobs'>Jobs</NavLink>
    </div>
  )
}

export default Navbar
