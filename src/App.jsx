import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Link } from 'react-router-dom'

function App() {
 

  return (
    <> 
      <header className='flex justify-between px-10 py-10 bg-red-800'>
        <h1 className='text-3xl text-white italic font-medium'>My App</h1>
        <nav className='flex gap-10 text-lg text-white font-bold'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  )
}

export default App
