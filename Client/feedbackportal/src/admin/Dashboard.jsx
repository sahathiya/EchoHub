
import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance';

function Dashboard() {
  const [reviewCount, setReviewCount] = useState();
    const [avgReview, setAvgReview] = useState();
   useEffect(()=>{
       const fetch = async () => {
          const response = await axiosInstance.get(`/api/admin/yearlycount`);
          setReviewCount(response.data.totalReviews);
          setAvgReview(response.data.averageRating);
        };
    
        fetch();
   },[])
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-center">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <p className="text-lg font-semibold text-gray-700">Total Reviews</p>
          <p className="text-3xl font-bold text-green-600">{reviewCount ?? 0}</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <p className="text-lg font-semibold text-gray-700">Average Rating</p>
          <p className="text-3xl font-bold text-yellow-500">
            {avgReview ? avgReview.toFixed(1) : "0.0"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
