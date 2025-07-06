import { useState } from 'react'  // to use hooks
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(0)  // useState(initial value can be number, string, object, anything), returns a 2-element array containing the given variable (say counter) in 0th index and a function (say setCounter) to manipulate the given variable as per our need.

  const incrementCounter = () =>{
    setCounter(counter++)
  }
  const decrementCounter = () =>{
    if(counter>=0) setCounter(counter--)
  }

  return (
    <>
      <h1>Counter that counts your values</h1>
      <p>Counter value: {counter}</p>
      <button
      onClick={incrementCounter}>Increase</button>
      <button
      onClick={decrementCounter}>Decrease</button>
    </>
  )
}

export default App
