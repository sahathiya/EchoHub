import React, { useState,useEffect } from 'react'
import logo from '../assets/feedback48.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegUserCircle } from "react-icons/fa";
import axiosInstance from '../utils/axiosInstance';
import {setlogoutUser, setNotifications } from '../features/auth/userSlice';
import { toast } from 'react-toastify';
import { IoNotificationsOutline } from "react-icons/io5";
import UploadModal from './UploadModal';
import Notifications from '../pages/Notifications';
import { io } from 'socket.io-client';

function Navbar() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[dropdown,setDropdown]=useState(false)
    const[showModal,setShowModal]=useState(false)
    const[notificationModal,setNotificationModal]=useState(false)

    const activeUser=useSelector((state)=>state.user.user)
    console.log('activeUser',activeUser);
    const handleDropdown=()=>{
      setDropdown(!dropdown)
    }


    const handleSignout=async(e)=>{
      e.preventDefault()
      const response=await axiosInstance.post('/api/auth/logout')
      console.log('resposne of logout',response);
  
      dispatch(setlogoutUser())
      setDropdown(false)
      
      console.log('resposne of logout',response);
      toast.success(response.data.message)
      navigate('/')
    
    }

    const handleModal=(e)=>{
      e.preventDefault(); 
      setShowModal(!showModal)
    }




useEffect(() => {
  if (!activeUser?._id) return;

  const socket = io('http://localhost:4000', {
    query: { userId: activeUser._id }
  });

  socket.on('connect', () => {
    console.log('Socket connected:', socket.id);
  });

  socket.on('feedback_response', (data) => {
    console.log('Received feedback response:', data);
    
      dispatch(setNotifications(data));
    
   
  });

  return () => {
    socket.disconnect(); 
  };
}, [activeUser]);

 
  return (
    <div>
      

<nav className=" font-nunito   bg-white  fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-8 "  alt="Logo"/>
      <span className="  self-center text-2xl font-semibold whitespace-nowrap dark:text-green-700">EchoHub</span>
  </a>

  <div
  className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative h-10"
>
  {activeUser == null ? (
    <button
      type="button"
      className="text-white bg-green-700 font-medium rounded-lg text-sm px-4 py-2 hover:bg-green-600"
      onClick={() => navigate('/login')}
    >
      Get started
    </button>
  ) : (
<>

<div className="flex items-center space-x-3">
  <button
    type="button"
    onClick={() => setNotificationModal(true)}
    className="flex items-center justify-center text-2xl"
  >
    <IoNotificationsOutline />
  </button>

  <button
    type="button"
    className="text-green-900 font-medium rounded-full text-4xl p-1 focus:outline-none flex items-center justify-center"
    onClick={handleDropdown}
  >
    {activeUser?.profileImage ? (
      <img
        src={activeUser.profileImage || ""}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover border border-gray-300"
      />
    ) : (
      <FaRegUserCircle className="text-2xl" />
    )}
  </button>
</div>


{
  notificationModal&&(
    <Notifications isOpen={notificationModal}        onClose={()=>setNotificationModal(false)}/>
  )
}
</>

  )}

  {dropdown && (
    <div
      id="dropdownInformation"
      className="absolute top-full right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 "
    >
      <div className="px-4 py-3 text-sm text-gray-900 ">
        <div>{activeUser?.name}</div>
        <div className="font-medium truncate">{activeUser?.email}</div>
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
        <li onClick={handleModal}>
          <a
            href=""
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Upload
          </a>
        </li>
        <li onClick={()=>navigate('/notifications')}>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Notifications
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
{showModal && (
        <UploadModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onUpload={(formData) => {
            // handle formData upload here
            // close modal after upload
          }}
        />
      )}
</div>




 
  </div>
</nav>

    </div>
  )
}

export default Navbar
