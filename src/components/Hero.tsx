import React from 'react'
import Divider from './Divider'
 import Avatar from '../assets/Avatar.png'

 import { SocialIcon } from 'react-social-icons';
function Hero() {
  return (
    <div className='h-screen  w-full  flex flex-col  max-w-[1440px] p-3 gap-y-10'>
       <div className='flex w-full max-w-[1200px]  justify-center '>
         <h1 className='hero-text  text-left p-12'>
             <strong>Hi my name's Dwiki. Tech enthusiast who likes to <span id='code'>{`<code/>`}</span> , particularly interested in frontend development. Currently working on React and SwiftUI</strong>
          </h1>
       </div>
       <div className='flex w-full gap-x-10 '>
         <div id='biography' className=' w-3/5 flex gap-x-10 '>
            <div id='photo'>
                    <img alt='memoji' src={Avatar}/>
            </div>
            <div className='flex flex-col'>
            <h2><strong>Biography</strong> </h2>
            <p>
                Computer science graduate with database technology specialization, from Bina Nusantara University. <br></br>
                Particularly drawn into frontend engineering, and mobile engineering. Currently learning SwiftUI.
            </p>
            </div>
           
         </div>
         <div id='biography' className=' w-2/5 flex flex-col gap-y-5'>
         <h2><strong>Contact me at</strong> </h2>
         <div className=' flex gap-x-10'>
               <SocialIcon url='https://twitter.com/dwikii____' bgColor='white'/>
               <SocialIcon url='https://www.linkedin.com/in/dwiki-dwiki-97610b223/' bgColor='white'/>
               <SocialIcon url='https://www.instagram.com/dwikii____/' bgColor='white'/>
         </div>
         </div>
       </div>
        <Divider/>
   </div>
  )
}

export default Hero