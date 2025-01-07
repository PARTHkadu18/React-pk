import { useState , useRef} from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  function inc(){
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
  }
  function dec(){
    setCounter(prevCounter=>prevCounter-1)
    setCounter(prevCounter=>prevCounter-1)
}


  return (
    <>
      <h1>Parth Kadu</h1>
      <h3>Counter Value:{counter}</h3>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
    </>
  )
}

export default App

