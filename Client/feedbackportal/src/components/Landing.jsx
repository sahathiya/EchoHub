import React from 'react'
import logo from '../assets/feedlogo.svg'
function Landing() {
  return (
    <div className='flex justify-evenly mt-24 bg-gray-100 w-full h-full'>
    <div>
      <h1 className='text-2xl text-green-900'>Your Thoughts. Our Action. Better Together.</h1>
    </div>
    <div>
        <img src={logo} className='h-24'/>
    </div>
  </div>
  )
}

export default Landing
