import React from 'react'
import { increment,decrement } from '../counter/counterSlice'
import { useSelector,useDispatch } from 'react-redux'

const Navbar = () => {
  return (
    <div>
      My count is {count}
    </div>
  )
}

export default Navbar
