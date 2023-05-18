import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar
 from './components/Navbar'
import Divider from './components/Divider'
import Hero from './components/Hero'

 
function App() {

  return (
    <div className='w-full flex flex-col justify-start items-center h-full m-auto'>
      <div className='border w-full bg-[#1E1E1E] h-screen flex flex-col items-center justify-start '> 
      <Navbar/>
       <Hero/>
      </div>
      <div className='border mt-0 h-screen w-full'>
        test
      </div>
    </div>
  )
}

export default App
