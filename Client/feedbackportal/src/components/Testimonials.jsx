import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchFeedbacks } from '../features/feedback/feedbackActions';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-blue-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-blue-500" />);
    }
  }

  return <div className="flex gap-1 justify-center mt-4">{stars}</div>;
}


function Testimonials() {
 
  const dispatch = useDispatch();
  const feedbacks=useSelector((state)=>state.feedback.feedbacks)
  const {  loading, error } = useSelector(state => state.feedback.feedbacks);
  console.log("feedbacks",feedbacks);
  
  useEffect(()=>{
    dispatch(fetchFeedbacks())
    
  },[dispatch])
  if (loading) return <p>Loading feedbacks...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Let’s Hear What Our Clients Have to Say About Us!
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Don’t believe us, let’s hear from the candidates who have registered with us for their job needs and what they have to say about their experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((item) => (
            <div key={item._id} className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-green-100`}>
              <div className="flex flex-col items-center">
                <img
                  src={item.userId.profileImage}
                  alt={item.userId.name}
                  className="w-20 h-20 rounded-full object-cover -mt-14 shadow-lg border-4 border-white"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.userId.name}</h3>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  {item.message}
                </p>
                <StarRating rating={Number(item.StarRating)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
