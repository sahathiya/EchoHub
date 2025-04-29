// import React from 'react'
// import feedback1 from '../assets/feedback1.png'
// function Feedback() {
//   return (
//     <div>
//       <div className='flex justify-between'>
//         <div>
//             <h1>Feel free to drop us your feedback</h1>
//             <img src={feedback1} className='w-[500px]'/>
//         </div>
//         <div>
//             <form>
//                 <textarea type='text' placeholder='Please tell us your reasons for giving this score here..'/>

//             </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Feedback


// import { useState } from "react";
// import { FaStar, FaRegStar } from "react-icons/fa"; 
// import ratingimg from '../assets/rating.png'
// import Navbar from "../components/Navbar";
// import { Formik,Form,ErrorMessage,Field } from "formik";
// import * as Yup from  'yup'

// const validationSchema = Yup.object({
//   rating: Yup.number().min(1, 'Please select a rating').required('Rating is required'),
//   message: Yup.string().required('Please enter your feedback'),
 
// });
// export default function FeedbackForm() {
//   // const [rating, setRating] = useState(1);
//   // const [message, setMessage] = useState("");
  

//   const handleStarClick = (index) => {
//     setRating(index);
//   };

//   const handleSubmit=(values, { setSubmitting, resetForm })=>{
//     console.log("Form values:", values);
//     setSubmitting(false);
//     resetForm();
//   }
//   return (
//     <>
//      < Navbar/>
//     <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex mt-24">
//       {/* Left side */}
//       <div className="md:w-1/2 bg-green-50 p-8 flex flex-col justify-center items-center">
//         <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
//           Feel free to drop us your feedback.
//         </h2>
//         <img
//           src={ratingimg}
//           alt="Feedback illustration"
//           className="w-[400px] h-auto"
//         />
//       </div>
//       <Formik
//       initialValues={
//         {
// rating:1,
// message:""
//         }}
//         validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//       >
//       {({ isSubmitting }) => (
//       <Form className="md:w-1/2 p-8 space-y-8">
//         {/* 1. Slider question */}
//         <div>
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">
//             How satisfied are you overall with the support of your Delivery Partner?
//           </h3>
          
         
            
          

// <div className="flex items-center space-x-2">
//             {[1, 2, 3, 4, 5].map((index) => (
//               <div
//                 key={index}
//                 onClick={() => handleStarClick(index)}
//                 className="cursor-pointer"
//               >
//                 {rating >= index ? (
//                   <FaStar className="text-yellow-400 text-2xl" />
//                 ) : (
//                   <FaRegStar className="text-gray-400 text-2xl" />
//                 )}
//               </div>
//             ))}
//           </div>
//            <ErrorMessage name="rating" component="div" className="text-red-500 text-sm mt-1" />
//           <p className="text-right text-gray-600 mt-1">Score: {rating}</p>
//         </div>

        
//         <div>
//           <Field
//           as='textarea'
//           name='message'
//             rows={4}
//             placeholder="Please tell us your reasons for giving this score here.."
//             className="w-full bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-700
//                        focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
//             // value={message}
//             // onChange={(e) => setMessage(e.target.value)}
//           />
//            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
//         </div>

      
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-green-600 text-white font-semibold rounded-lg py-3
//                      hover:bg-green-500 transition"
//         >
//           Send Feedback
//         </button>
//       </Form>
//       )}
//       </Formik>
//     </div>
//     </>
  
//   );
// }


import { FaStar, FaRegStar } from "react-icons/fa";
import ratingimg from '../assets/rating.png';
import Navbar from "../components/Navbar";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  starRating: Yup.number().min(1, 'Please select a rating').required('Rating is required'),
  message: Yup.string().required('Please enter your feedback'),
});

export default function FeedbackForm() {

  const handleSubmit =async (values, { setSubmitting, resetForm }) => {
    console.log("Form values:", values);

    const response=await axiosInstance.post('/api/feedback/create',values)
    console.log("response of feedback",response);
    toast.success(response.data.message)
    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex mt-24">
        {/* Left side */}
        <div className="md:w-1/2 bg-green-50 p-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
            Feel free to drop us your feedback.
          </h2>
          <img
            src={ratingimg}
            alt="Feedback illustration"
            className="w-[400px] h-auto"
          />
        </div>

        <Formik
          initialValues={{ starRating: 0, message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="md:w-1/2 p-8 space-y-8">
              {/* Rating */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  How satisfied are you overall with the support of your Delivery Partner?
                </h3>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div
                      key={index}
                      onClick={() => setFieldValue('starRating', index)}
                      className="cursor-pointer"
                    >
                      {values.starRating >= index ? (
                        <FaStar className="text-yellow-400 text-2xl" />
                      ) : (
                        <FaRegStar className="text-gray-400 text-2xl" />
                      )}
                    </div>
                  ))}
                </div>
                <ErrorMessage name="starRating" component="div" className="text-red-500 text-sm mt-1" />
                <p className="text-right text-gray-600 mt-1">Score: {values.starRating}</p>
              </div>

              {/* Message */}
              <div>
                <Field
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Please tell us your reasons for giving this score here..."
                  className="w-full bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-700
                             focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white font-semibold rounded-lg py-3
                           hover:bg-green-500 transition"
              >
                Send Feedback
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
