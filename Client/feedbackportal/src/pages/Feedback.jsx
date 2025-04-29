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


import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import ratingimg from '../assets/rating.png'
import Navbar from "../components/Navbar";
export default function FeedbackForm() {
  const [rating, setRating] = useState(7);
  const [comments, setComments] = useState("");
  const [month, setMonth] = useState("Sep");
  const [year, setYear] = useState("2019");

  const handleStarClick = (index) => {
    setRating(index);
  };
  return (
    <>
     < Navbar/>
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex mt-24">
      {/* Left side */}
      <div className="md:w-1/2 bg-teal-50 p-8 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-teal-700 mb-8 text-center">
          Feel free to drop us your feedback.
        </h2>
        <img
          src={ratingimg}
          alt="Feedback illustration"
          className="w-[400px] h-auto"
        />
      </div>

      {/* Right side */}
      <form className="md:w-1/2 p-8 space-y-8">
        {/* 1. Slider question */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            How satisfied are you overall with the support of your Delivery Partner?
          </h3>
          {/* <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Not at all likely</span>
            <input
              type="range"
              min="0"
              max="10"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="flex-1 accent-teal-600"
            />
            <span className="text-sm text-gray-500">Extremely likely</span>
          </div> */}

<div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                onClick={() => handleStarClick(index)}
                className="cursor-pointer"
              >
                {rating >= index ? (
                  <FaStar className="text-yellow-400 text-2xl" />
                ) : (
                  <FaRegStar className="text-gray-400 text-2xl" />
                )}
              </div>
            ))}
          </div>
          <p className="text-right text-gray-600 mt-1">Score: {rating}</p>
        </div>

        {/* 2. Open-ended feedback */}
        <div>
          <textarea
            rows={4}
            placeholder="Please tell us your reasons for giving this score here.."
            className="w-full bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-700
                       focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

        {/* 3. Month & Year selects */}
        {/* <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Now please tell us the month and the year on which the following first happened
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            I first started to trade (selling goods / delivering services) and receiving income
          </p>
          <div className="flex space-x-4">
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg p-2
                         focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
            >
              {[
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
              ].map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-24 border border-gray-300 rounded-lg p-2
                         focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
            >
              {Array.from({ length: 10 }, (_, i) => 2025 - i).map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div> */}

        {/* 4. Submit button */}
        <button
          type="submit"
          className="w-full bg-teal-700 text-white font-semibold rounded-lg py-3
                     hover:bg-teal-800 transition"
        >
          Send Feedback
        </button>
      </form>
    </div>
    </>
  
  );
}
