import { useState, version } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let myCard1={
    ver: 4.3,
    sub: "Biology"
  };
  let myCard2={
    ver: 4.5,
    sub:"Physics"
  };

  return (
    <>
     <Cards subject={myCard1.sub} version={myCard1.ver} />       
     {/*we can use props to pass strings, arrays, objects, anything as argument to the components*/}
     <Cards subject={myCard2.sub} version={myCard2.ver}/>
    </>
  )
}

export default App
