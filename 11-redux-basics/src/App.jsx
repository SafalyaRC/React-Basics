import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment } from "./counter/counterSlice";
import { counterSlice } from "./counter/counterSlice";


function App() {
  const count=useSelector((state)=>state.counter.value)

  return (
    <>
      <Navbar />
      <div>
        {count}
      </div>
    </>
  );
}

export default App;
