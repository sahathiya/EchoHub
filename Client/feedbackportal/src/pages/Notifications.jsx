import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import clsx from 'clsx';
import { X } from 'lucide-react';

import {  useDispatch, useSelector } from 'react-redux';
import { clearNotifications, removeNotification } from '../features/auth/userSlice';

// const notifications = [
//   {
//     id: 1,
//     type: 'Joined New User',
//     tagColor: 'bg-green-500',
//     title: 'New Registration: Finibus Bonorum et Malorum',
//     message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
//     user: 'Allen Deu',
//     userColor: 'text-red-600',
//     time: '24 Nov 2018 at 9:30 AM'
//   }
// ];

function Notifications({ isOpen, onClose }){
const dispatch=useDispatch()
const activeUser=useSelector((state)=>state.user.user)
const notifications=useSelector((state)=>state.user.notifications)

const userNotifications = notifications?.filter(
  (note) => note.userId === activeUser?._id // ✅ only include matching userId
);
      console.log("notifications",notifications);
      const handleClear=()=>{
       dispatch(clearNotifications(activeUser._id)) 
      }
     return (
    <>
    {/* Backdrop */}
    {isOpen && (
      <div
        className="fixed inset-0    backdrop-blur-md "
        onClick={onClose}
      />
    )}

    {/* Slide-in Modal */}
    <div
      className={clsx(
        "font-nunito    fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out",
        {
          "translate-x-0": isOpen,
          "translate-x-full": !isOpen,
        }
      )}
    >
      <div className="p-6 overflow-y-auto h-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">NOTIFICATIONS</h2>

          <button onClick={handleClear}><p className='text-gray-500 text-sm cursor-pointer'>Clear all</p></button>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <div className="space-y-4">


{Array.isArray(userNotifications) && userNotifications.length > 0 ? (
  userNotifications.map((note,index) => (
    <div
    key={index}
    className="bg-gray-100 rounded-md p-4 flex flex-col md:flex-row justify-between items-start md:items-center border"
  >
    <div className="flex items-start space-x-4 w-full">
      <button className="text-gray-400 hover:text-gray-600 text-xl font-bold"
      onClick={() => dispatch(removeNotification(index))}
      >×</button>
      <div>
        <span className={`inline-block text-white text-xs font-semibold px-2 py-1 rounded bg-green-700 `}>
          Response from admin
        </span>
        <h3 className="font-semibold mt-2">{note.message} :</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-4">{note.userMessage}</p>
        <p className={`text-sm font-semibold mt-1 `}>{note.response}</p>
       

       <div className="flex items-center text-gray-400 text-sm mt-4 md:mt-0 md:ml-4">
       <Clock className="w-4 h-4 mr-1" />
       <span>{note.date}</span>
    </div>
      </div>
      
    </div>
   
  </div>
  ))
) : (
  <p>No notifications found</p>
)}  

        </div>
      </div>
    </div>
  </>
  );
}

export default Notifications;
