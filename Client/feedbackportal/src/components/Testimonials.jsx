import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchFeedbacks } from '../features/feedback/feedbackActions';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
const testimonials = [
  {
    id: 1,
    name: 'Sarah J.',
    title: 'Registered Nurse',
    message:
      'I found my dream nursing job quickly thanks to this user-friendly portal. The search filters are excellent. Highly recommend it!',
    rating: 4.5,
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    bgColor: 'bg-blue-100',
  },
  {
    id: 2,
    name: 'John M.',
    title: 'Healthcare Admin',
    message:
      'This job portal streamlined our hiring process, helping us find qualified candidates effortlessly. It\'s a game-changer for healthcare recruitment.',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    bgColor: 'bg-teal-100',
  },
  {
    id: 3,
    name: 'Emily R.',
    title: 'Junior Doctor',
    message:
      'This site made my job search easy, and I secured a fantastic position within weeks. The resources provided are invaluable.',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/women/46.jpg',
    bgColor: 'bg-yellow-100',
  },
];

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-blue-500" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-blue-500" />);
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
          {testimonials.map((t) => (
            <div key={t.id} className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-green-100`}>
              <div className="flex flex-col items-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover -mt-14 shadow-lg border-4 border-white"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{t.name}</h3>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  {t.message}
                </p>
                <StarRating rating={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
