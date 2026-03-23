import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div className='p-10'>
      <h1 className='text-3xl font-bold mb-5'>Welcome to My App</h1>
      <p className='text-lg text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo. Sed at felis a enim efficitur bibendum. Curabitur ac ligula id odio efficitur tincidunt. Nulla facilisi. Donec ut velit a nisl convallis fermentum. Proin in nunc sed metus efficitur bibendum.</p>
    </div>
  )
}
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
