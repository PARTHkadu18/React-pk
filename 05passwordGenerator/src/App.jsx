import { useCallback, useEffect, useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("")

  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str+="1234567890"
      if(charAllowed) str+="!@#$%^&*()_-+={}[]"

      for(let i=0; i<length; i++){
          let char=Math.floor(Math.random()*str.length)
          pass+=str.charAt(char);
      }

      setPassword(pass)
    },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
      passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <div className='w-full justify-center mt-6 bg-orange-400 text-violet-950 max-w-md rounded-2xl mx-auto my-auto px-4 py-3'>
      <h1 className='text-center text-3xl mb-2'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-2'>
        <input type="text" value={password} 
        placeholder='Password'
        readOnly
        className='outline-none w-full py-1 px-3'
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='bg-blue-800 text-white px-7 text-xl'>Copy</button>
      </div>
      <div className='flex'>
          <div>
            <input type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}} 
          />
          <label>Length: {length}</label>
          </div>
          <div>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            className='ml-3'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='number Input'>Number</label>
          </div>
          <div>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            className='ml-3'
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='characterInput'>Char</label>
          </div>
      </div>
    </div>
  )
}

export default App
