// import React from 'react'
// import logo from '../assets/feedlogo.svg';
// import register from '../assets/register.svg'
// import { Link } from 'react-router-dom';
// function Registration() {
//   return (
//     <div className="bg-gray-100 h-screen w-full flex items-center justify-center">
        
//     <div className="bg-white  shadow-lg p-8 w-full max-w-lg rounded-md">
//       {/* Logo and Sign-in Form */}

// <div className='bg-gray-300 rounded-md'>
// <img src={register} className='w-[300px] h-[300px]'/>
// </div>
//     </div>

// <div className="  shadow-lg p-8 w-full max-w-lg rounded-md  hidden md:block ">
       
// <div className='flex justify-end'>
//     <Link to={`/`}>
//     <img src={logo} alt="logo" className="h-8 " />
//     </Link>
     
//      </div>
//       <div className=" mb-6">
     
//         <h1 className="text-3xl font-semibold text-gray-800 mt-4">Get Started Now</h1>
      
//       </div>

     
//       <form className="space-y-6">
//        <div className='flex space-x-4'>
//        <div>
//           <label className="block text-sm font-medium text-gray-600">Name</label>
//           <input
//             type="name"
//             placeholder="Enter Your name"
//             className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-900 focus:outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-600">E-mail</label>
//           <input
//             type="email"
//             placeholder="example@gmail.com"
//             className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-900 focus:outline-none"
//           />
//         </div>
//        </div>
//         <div className='flex space-x-4'>
//         <div>
//           <label className="block text-sm font-medium text-gray-600">Password</label>
//           <input
//             type="password"
//             placeholder="********"
//             className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-900 focus:outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-600">Conform Password</label>
//           <input
//             type="cpassword"
//             placeholder="********"
//             className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-900 focus:outline-none"
//           />
//         </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-green-900 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition duration-200"
//         >
//           Sign up
//         </button>
//         <p className="text-lg text-gray-500 mt-2">
//         Already have an account?{' '}
//           <Link to={`/login`}><span className="text-green-900 underline text-xl  cursor-pointer">
//             Sign in
//           </span></Link>
//         </p>
//       </form>






     
    
//     </div>

//   </div>
//   )
// }

// export default Registration

import React, { useState } from 'react';
import logo from '../assets/feedlogo.svg';
import register from '../assets/register.svg';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
function Registration() {
  const[showpassword,setShowpassword]=useState(false)
  const[showcpassword,setShowcpassword]=useState(false)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full">
        
        {/* Left Illustration */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={register}
            alt="Register Illustration"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          
          {/* Logo & Nav */}
          <div className="flex justify-end items-center mb-8">
            <Link to="/">
              <img src={logo} alt="EchoHub Logo" className="h-10" />
            </Link>
           
          </div>
          
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Get Started Now
          </h2>

          {/* Form */}
          <form className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
                />
              </div>
            </div>

          
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       
        <div className="relative">
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type={showpassword ? 'text' : 'password'}
            placeholder="••••••••"
            className="mt-2 w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
          />
          <button
            type="button"
            onClick={() => setShowpassword(!showpassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-gray-500"
          >
            {showpassword ? (
              <IoEyeOffOutline size={20} />
            ) : (
              <IoEyeOutline size={20} />
            )}
          </button>
        </div>

        {/* Confirm Password Field */}
       <div className="relative">
  <label className="block text-sm font-medium text-gray-600">
    Confirm Password
  </label>
  <input
    type={showcpassword ? 'text' : 'password'}
    placeholder="••••••••"
    className="mt-2 w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
  />
  <button
    type="button"
    onClick={() => setShowcpassword(!showcpassword)}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center text-gray-500"
  >
    {showcpassword ? (
      <IoEyeOffOutline size={20} />
    ) : (
      <IoEyeOutline size={20} />
    )}
  </button>
</div>

      </div>
            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-900 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors duration-200"
            >
              Sign Up
            </button>
            <p className="text-lg text-gray-500 mt-2">
        Already have an account?{' '}
          <Link to={`/login`}><span className="text-green-900 underline text-xl  cursor-pointer">
            Sign in
          </span></Link>
         </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
