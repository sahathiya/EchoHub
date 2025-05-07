


import React, { useState } from 'react';
import logo from '../assets/feedback48.png';
import register from '../assets/register.svg';
import { Link, useNavigate } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../utils/axiosInstance';
import { useDispatch } from 'react-redux';
import { setactiveUser } from '../features/auth/userSlice';
import { toast } from 'react-toastify';


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
                  {/* <div className="relative">
                    <label className="block text-sm font-medium text-gray-600">Password</label>
                    <Field
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      // className="mt-2 w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
                      className="mt-2 w-full py-2.5 px-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      // className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                     className="absolute top-[55%] right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                    >
                      {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                    </button>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                  </div> */}

                  {/* <div className="relative bg-amber-50">
                    <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                    <Field
                      name="confirmPassword"
                      type={showCPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="mt-2 w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
                      // className="w-full   p-3  border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCPassword(!showCPassword)}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    >
                      {showCPassword ? <IoEyeOffOutline size={20}  /> : <IoEyeOutline size={20} />}
                    </button>
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                  </div> */}


<div className="relative">
  <label className="block text-sm font-medium text-gray-600">Password</label>

  <div className="relative">
    <Field
      name="password"
      type={showPassword ? 'text' : 'password'}
      placeholder="••••••••"
      className="mt-2 w-full py-2.5 px-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute top-[55%] right-3 -translate-y-1/2 cursor-pointer text-gray-500"
    >
      {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
    </button>
  </div>

  <ErrorMessage
    name="password"
    component="div"
    className="text-red-500 text-sm mt-1"
  />
</div>


<div className="relative">
  <label className="block text-sm font-medium text-gray-600">
    Confirm Password
  </label>

  <div className="relative">
    <Field
      name="confirmPassword"
      type={showCPassword ? 'text' : 'password'}
      placeholder="••••••••"
      className="mt-2 w-full py-2.5 px-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:outline-none transition"
    />

    <button
      type="button"
      onClick={() => setShowCPassword(!showCPassword)}
      className="absolute top-[55%] right-3 -translate-y-1/2 cursor-pointer text-gray-500"
    >
      {showCPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
    </button>
  </div>

  <ErrorMessage
    name="confirmPassword"
    component="div"
    className="text-red-500 text-sm mt-1"
  />
</div>

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition"
                >
                  Register
                </button>
<p className="text-lg text-gray-500 mt-2">
             Already have an account?{' '}
           <Link to={`/login`}> <span className="text-green-700 font-medium hover:underline">
               Sign in
            </span></Link>
          </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Registration;
