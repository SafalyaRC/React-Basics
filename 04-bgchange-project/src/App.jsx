import { useState } from 'react'


function App() {
  const [color,setColor]=useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2 h-screen gap-3'>
        

        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}
        onClick={()=>setColor("red")}
        >Red</button>

        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}
        onClick={()=>setColor("green")}
        >Green</button>

        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}
        onClick={()=>setColor("blue")}
        >Blue</button>

        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "brown"}}
        onClick={()=>setColor("brown")}>Brown</button>

        <button
        className="outline-none px-4 py-1 rounded-full text-white-100 shadow-lg"
        style={{backgroundColor: "orange"}}
        onClick={()=>setColor("orange")}>Orange</button>

        <button
        className="outline-none px-4 py-1 rounded-full text-white-100 shadow-lg"
        style={{backgroundColor: "yellow"}}
        onClick={()=>setColor("yellow")}>Yellow</button>

        </div>
      </div>
    
  )
}

export default App
