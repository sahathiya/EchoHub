import React, { useState } from 'react'
import logo from '../assets/feedlogo.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegUserCircle } from "react-icons/fa";
import axiosInstance from '../utils/axiosInstance';
import { setactiveUser, setlogoutUser } from '../features/auth/userSlice';
import { toast } from 'react-toastify';
function Navbar() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[dropdown,setDropdown]=useState(false)
    const activeUser=useSelector((state)=>state.user.user)
    console.log('activeUser',activeUser);
    const handleDropdown=()=>{
      setDropdown(!dropdown)
    }


    const handleSignout=async()=>{
      const response=await axiosInstance.post('/api/auth/logout')
      console.log('resposne of logout',response);
      
      dispatch(setlogoutUser())
      localStorage.removeItem('persist:user');
      toast.success(response.data.message)
    
    }
  return (
    <div>
      

<nav className="bg-white  fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-8 "  alt="Logo"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-green-900">EchoHub</span>
  </a>

  <div
  className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative"
>
  {activeUser == null ? (
    <button
      type="button"
      className="text-white bg-green-900 font-medium rounded-lg text-sm px-4 py-2"
      onClick={() => navigate('/login')}
    >
      Get started
    </button>
  ) : (
    <button
      type="button"
      className="text-green-900 font-medium rounded-lg text-4xl px-4 py-2"
      onClick={handleDropdown}
    >
      <FaRegUserCircle />
    </button>
  )}

  {dropdown && (
    <div
      id="dropdownInformation"
      className="absolute top-full right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 "
    >
      <div className="px-4 py-3 text-sm text-gray-900 ">
        <div>{activeUser.name}</div>
        <div className="font-medium truncate">{activeUser.email}</div>
      </div>
      <ul className="py-2 text-sm text-gray-700 ">
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Earnings
          </a>
        </li>
      </ul>
      <div className="py-2"
      onClick={handleSignout}>
        <a
          href=''
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 "
        >
          Sign out
        </a>
      </div>
    </div>
  )}
</div>




 
  </div>
</nav>

    </div>
  )
}

export default Navbar
