import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div className='bg-[#212121] w-screen h-screen box-border overflow-hidden p-4 text-white'>
        <h1>This is heading 1</h1>
        <h2>This is a subtitle</h2>
        <div>
          <button className='btn btn-primary'>This is a primary button</button>
        </div>
        <div className='my-3'>
        <button className='btn btn-secondary'>This is a secondary button</button>
        </div>
        <div>
        <input type="text" />
        </div>
        <input type="text" className='mt-2'/>
        <br />
        <a href="https://www.youtube.com" target='_blank'>Visit youtube</a>
      </div>
    </>
  )
}

export default App
