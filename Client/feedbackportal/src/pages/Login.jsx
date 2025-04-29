
// import React from 'react';
// import logo from '../assets/feedlogo.svg';
// import home4 from '../assets/home4.svg'
// import { Link } from 'react-router-dom';
// function Login() {
//   return (
//     <div className="bg-gray-100 h-screen w-full flex items-center justify-center">
        
//       <div className="bg-white  shadow-lg p-8 w-full max-w-lg rounded-md">
//         {/* Logo and Sign-in Form */}
       
//        <div className='flex space-x-2'>
//       <Link to={`/`}>
//       <img src={logo} alt="logo" className="h-8" />
//       </Link>
       
//        </div>
//         <div className=" mb-6">
       
//           <h1 className="text-3xl font-semibold text-gray-800 mt-4">Sign In</h1>
         
//         </div>

//         {/* Login Form */}
//         <form className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">E-mail</label>
//             <input
//               type="email"
//               placeholder="example@gmail.com"
//               className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-900 focus:outline-none"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Password</label>
//             <input
//               type="password"
//               placeholder="********"
//               className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-900 focus:outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-900 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition duration-200"
//           >
//             Sign in
//           </button>

//           <p className="text-lg text-gray-500 mt-2">
//             Don't have an account?{' '}
//            <Link to={`/register`}> <span className="text-green-900 underline text-xl  cursor-pointer">
//               Sign up
//             </span></Link>
//           </p>
//         </form>
//       </div>

    

// <div className="  shadow-lg p-8 w-full max-w-lg rounded-md  hidden md:block ">
       

        
     
//   <img src={home4} className='w-[300px] h-[300px]'/>
 
//       </div>

//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import logo from '../assets/feedlogo.svg';
import home4 from '../assets/home4.svg';
import { Link, useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Formik,Form,ErrorMessage,Field } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { setactiveUser } from '../features/auth/userSlice';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
 
});
function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[showpassword,setShowpassword]=useState(false)

  const handleSubmit=async(values)=>{
console.log("values",values);
const response=await axiosInstance.post('/api/auth/login',values)
const user=response.data.user
dispatch(setactiveUser(user))
toast.success(response.data.message)
navigate('/')

  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        
       
        <div className="w-full md:w-1/2 p-6 md:p-10">
          
          
          <div className="flex items-center justify-between mb-8">
            <Link to="/">
              <img src={logo} alt="EchoHub Logo" className="h-8" />
            </Link>
            
          </div>

         
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Sign In 
          </h2>

          <Formik
          initialValues={{
           
            email: '',
            password: '',
           
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          >
              {({ isSubmitting }) => (
          <Form className="space-y-6">
           
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <Field
              name='email'
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
              />
               <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            
           
           <div className="relative">
                    <label className="block text-sm font-medium text-gray-600">
                      Password
                    </label>
                    <Field
                    name='password'
                      type={showpassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="mt-2 w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
                    />
                     <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
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

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-900 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors duration-200"
            >
              Sign In
            </button>

          
<p className="text-lg text-gray-500 mt-2">
             Don't have an account?{' '}
           <Link to={`/register`}> <span className="text-green-900 font-medium hover:underline">
               Sign up
            </span></Link>
          </p>
          </Form>
              )}
          </Formik>
          
        </div>

        <div className="hidden md:flex md:w-1/2 bg-green-900 items-center justify-center">
          <img
            src={home4}
            alt="Login Illustration"
            className="w-3/4 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
