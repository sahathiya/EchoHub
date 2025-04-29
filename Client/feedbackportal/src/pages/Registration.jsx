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

// import React, { useState } from 'react';
// import logo from '../assets/feedlogo.svg';
// import register from '../assets/register.svg';
// import { Link } from 'react-router-dom';
// import { IoEyeOutline } from "react-icons/io5";
// import { IoEyeOffOutline } from "react-icons/io5";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
// });

// function Registration() {
//   const[showpassword,setShowpassword]=useState(false)
//   const[showcpassword,setShowcpassword]=useState(false)
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full">
        
//         {/* Left Illustration */}
//         <div className="hidden md:block md:w-1/2">
//           <img
//             src={register}
//             alt="Register Illustration"
//             className="object-cover h-full w-full"
//           />
//         </div>

//         {/* Right Form */}
//         <div className="w-full md:w-1/2 p-8 md:p-10">
          
//           {/* Logo & Nav */}
//           <div className="flex justify-end items-center mb-8">
//             <Link to="/">
//               <img src={logo} alt="EchoHub Logo" className="h-10" />
//             </Link>
           
//           </div>
          
//           {/* Headline */}
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
//             Get Started Now
//           </h2>
//           <Formik
//            initialValues={{
//             name: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//           }}
//           validationSchema={validationSchema}
//           onSubmit={(values) => {
//             console.log('Form Submitted:', values);
//             // You can send data to your API here
//           }}
//           >

          
// {({ values }) => (
//           {/* Form */}
//           <Form className="space-y-6">
//             {/* Name & Email */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Name
//                 </label>
//                 <Field
//                   type="text"
//                   placeholder="Your Name"
//                   className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Email
//                 </label>
//                 <Field
//                   type="email"
//                   placeholder="you@example.com"
//                   className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
//                 />
//               </div>
//             </div>

          
// <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       
//         <div className="relative">
//           <label className="block text-sm font-medium text-gray-600">
//             Password
//           </label>
//           <Field
//             type={showpassword ? 'text' : 'password'}
//             placeholder="••••••••"
//             className="mt-2 w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
//           />
//           <button
//             type="button"
//             onClick={() => setShowpassword(!showpassword)}
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-gray-500"
//           >
//             {showpassword ? (
//               <IoEyeOffOutline size={20} />
//             ) : (
//               <IoEyeOutline size={20} />
//             )}
//           </button>
//         </div>

//         {/* Confirm Password Field */}
//        <div className="relative">
//   <label className="block text-sm font-medium text-gray-600">
//     Confirm Password
//   </label>
//   <Field
//     type={showcpassword ? 'text' : 'password'}
//     placeholder="••••••••"
//     className="mt-2 w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
//   />
//   <button
//     type="button"
//     onClick={() => setShowcpassword(!showcpassword)}
//     className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center text-gray-500"
//   >
//     {showcpassword ? (
//       <IoEyeOffOutline size={20} />
//     ) : (
//       <IoEyeOutline size={20} />
//     )}
//   </button>
// </div>

//       </div>
//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-green-900 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors duration-200"
//             >
//               Sign Up
//             </button>
//             <p className="text-lg text-gray-500 mt-2">
//         Already have an account?{' '}
//           <Link to={`/login`}><span className="text-green-900 underline text-xl  cursor-pointer">
//             Sign in
//           </span></Link>
//          </p>
//           </Form>
// )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Registration;


import React, { useState } from 'react';
import logo from '../assets/feedlogo.svg';
import register from '../assets/register.svg';
import { Link, useNavigate } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../utils/axiosInstance';
import { useDispatch } from 'react-redux';
import { setactiveUser } from '../features/auth/userSlice';
import { toast } from 'react-toastify';

// ✅ Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

function Registration() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
const handleSubmit=async(values)=>{
  console.log("vvvv",values);
const response=await axiosInstance.post(`/api/auth/register`,values)

  console.log("response of register",response);
const user=response.data.user
dispatch(setactiveUser(user))
toast.success(response.data.message)
  navigate('/')

}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full">

        {/* Left Illustration */}
        <div className="hidden md:block md:w-1/2">
          <img src={register} alt="Register Illustration" className="object-cover h-full w-full" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <div className="flex justify-end items-center mb-8">
            <Link to="/">
              <img src={logo} alt="EchoHub Logo" className="h-10" />
            </Link>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Get Started Now</h2>

          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Name</label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                {/* Password & Confirm Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-600">Password</label>
                    <Field
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="mt-2 w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                    </button>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                    <Field
                      name="confirmPassword"
                      type={showCPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="mt-2 w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCPassword(!showCPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {showCPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                    </button>
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-900 text-white py-2 px-4 rounded hover:bg-green-800 transition"
                >
                  Register
                </button>

              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Registration;
