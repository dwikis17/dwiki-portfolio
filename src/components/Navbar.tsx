import React from 'react'
import '../index.css'

function Navbar() {
  return (
    <div className='h-[160px]  w-full sm:flex flex-col justify-center  items-center max-w-[1440px] sticky  p-3 hidden'>
        <div className=' w-full h-full flex justify-between items-center '>
            <h1 className='font-bold name'>Dwiki</h1>
            <ul className='list  flex gap-x-12'>
                <li>Home</li>
                <li>Projects</li>
                <li>About me</li>
            </ul>
        </div>
        <div className='border-t-4 border-[#4D4D4D]  w-full'></div>
    </div>
  )
}

export default Navbar