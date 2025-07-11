import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [password, setPassword]=useState("")
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [length, setLength]=useState(9)

  // useCallback(fn, dependecies in array) is used to store the specified function in the cache when it's being re-rendered several times.
    const passwordGenerator = useCallback( ()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`"

    for(let i=1;i<=length;i++)
    {
      let index= Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(index)
    }
    setPassword(pass)
  },[numberAllowed,charAllowed,length] )
  
  // useRef hook creates a reference of the specified call (here communicates with line 53)
    const passwordRef = useRef(null)

    const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // this useEffect hook will automatically call the password generating when the webpage loads
  useEffect( ()=>{
    passwordGenerator();
  },[length,charAllowed,numberAllowed] )


  return (
    <>

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
      </div>

      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
       <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
       </div>
       </div>
    </div>
    
    </>
  )
}

export default App
