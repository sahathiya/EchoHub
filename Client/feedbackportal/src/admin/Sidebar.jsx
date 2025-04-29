import React from 'react'
import logo from '../assets/feedlogo.svg'
import { Link } from 'react-router-dom'
import Reviews from './Reviews'
function Sidebar() {
  return (
    <div className='w-54 h-screen bg-gray-100'>

          <div className="flex items-center justify-between mb-8">
            <Link to="/">
              <img src={logo} alt="EchoHub Logo" className="h-8" />
            </Link>
            
          </div>
       
    </div>
  )
}

export default Sidebar
