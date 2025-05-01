// import { FaStar, FaRegStar, FaBell, FaHeart, FaRegHeart } from 'react-icons/fa';
// import { HiOutlineChat } from 'react-icons/hi';
// import { MdEmail } from 'react-icons/md';


// const StarRating = ({ rating }) => {
//   return (
//     <div className="flex text-yellow-400">
//       {[...Array(5)].map((_, i) =>
//         i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
//       )}
//     </div>
//   );
// };

// const ReviewCard = ({ user }) => (
//   <div className="flex gap-4 p-6 bg-white shadow-md rounded-xl mb-6">
//     <img
//       src={user.avatar}
//       alt={user.name}
//       className="w-16 h-16 rounded-full object-cover"
//     />
//     <div className="flex-1">
//       <div className="flex justify-between items-center">
//         <h3 className="font-semibold text-lg">{user.name}</h3>
//         <div className="flex items-center gap-2 text-sm text-gray-500">
//           <StarRating rating={user.rating} />
//           <span>{user.date}</span>
//         </div>
//       </div>
//       <p className="text-sm text-gray-600">
//         Total Spend: <span className="font-medium">${user.spend}</span> &nbsp;
//         | Total Reviews: <span className="font-medium">{user.totalReviews}</span>
//       </p>
//       <p className="mt-2 text-gray-700 whitespace-pre-line">{user.review}</p>
//       <div className="flex gap-4 mt-4">
//         <button className="flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded">
//           <HiOutlineChat /> Public Comment
//         </button>
//         <button className="flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded">
//           <MdEmail /> Direct Message
//         </button>
//         <button className="text-red-500 hover:text-red-600">
//           {user.liked ? <FaHeart /> : <FaRegHeart />}
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default function Reviews() {
//   const reviews = [
//     {
//       name: 'Towhidur Rahman',
//       avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
//       spend: 200,
//       totalReviews: 14,
//       rating: 5,
//       date: '24-10-2022',
//       review: `My first and only mala ordered on Etsy, and I'm beyond delighted! I requested a custom mala based on two stones I was called to invite together in this kind of creation. The fun and genuine joy I invite together in this kind of creation.\nThe fun and genuine joy.`,
//       liked: true,
//     },
//     {
//       name: 'Towhidur Rahman',
//       avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
//       spend: 200,
//       totalReviews: 14,
//       rating: 3,
//       date: '24-10-2022',
//       review: `My first and only mala ordered on Etsy, and I'm beyond delighted! I requested a custom mala based on two stones I was called to invite together in this kind of creation. The fun and genuine joy I invite together in this kind of creation.\nThe fun and genuine joy.`,
//       liked: false,
//     },
//   ];

//   return (
//     <>
   
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold">Reviews</h2>
//         <FaBell className="text-xl text-gray-500" />
//       </div>

//       <div className="grid grid-cols-2 gap-6 mb-8 text-center">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <p className="text-3xl font-bold">10.0k <span className="text-green-500 text-sm">↑ 21%</span></p>
//           <p className="text-gray-500 text-sm mt-1">Growth in reviews this year</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <p className="text-3xl font-bold">4.0 <span className="text-yellow-400"><FaStar className="inline" /></span></p>
//           <p className="text-gray-500 text-sm mt-1">Average rating this year</p>
//         </div>
//       </div>

//       <div className="flex justify-end text-sm text-gray-500 mb-4">
//         March 2021 – February 2022
//       </div>

//       {reviews.map((user, idx) => (
//         <ReviewCard key={idx} user={user} />
//       ))}
//     </div>
//     </>
    
//   );
// }


import { useEffect } from "react";
import {
  FaStar,
  FaRegStar,
  FaBell,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeedbacksAdmin } from "../features/admin/adminActions";

const StarRating = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) =>
      i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
    )}
  </div>
);

const ReviewCard = ({ user }) => (
  <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6 bg-white shadow-md rounded-xl mb-6">
    <img
      src={user.userId.profileImage}
      alt={user.userId.name}
      className="w-16 h-16 rounded-full object-cover mx-auto sm:mx-0"
    />
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h3 className="font-semibold text-lg">{user.userId.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
         
          <span>
  {new Date(user.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })}
</span>

        </div>
      </div>
      {/* <p className="text-sm text-gray-600 mt-1">
       
        {user.reviewLabel}
      </p> */}
      <div className="flex items-center space-x-4 ">
      <p
  className={`text-md mt-1 ${
    user.starRating <= 2
      ? 'text-red-600'
      : user.starRating <= 3
      ? 'text-yellow-600'
      : 'text-green-600'
  }`}
>
  {user.reviewLabel}
</p>
      <StarRating rating={user.starRating} />
      </div>



      <p className="mt-2 text-gray-700 whitespace-pre-line">{user.message}</p>
      <div className="flex flex-wrap gap-3 mt-4">
        <button className="flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded">
          <HiOutlineChat /> Public Comment
        </button>
        {/* <button className="flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded">
          <MdEmail /> Direct Message
        </button>
        <button className="text-red-500 hover:text-red-600">
          {user.liked ? <FaHeart /> : <FaRegHeart />}
        </button> */}
      </div>
    </div>
  </div>
);

export default function Reviews() {
const dispatch=useDispatch()
const feedbacks=useSelector((state)=>state.admin.feedbacks)
console.log("feedbacks from admin",feedbacks);

  useEffect(()=>{
dispatch(fetchFeedbacksAdmin())
  },[dispatch])
  const reviews = [
    {
      name: "Towhidur Rahman",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      spend: 200,
      totalReviews: 14,
      rating: 5,
      date: "24-10-2022",
      review:
        "My first and only mala ordered on Etsy, and I'm beyond delighted!\nThe fun and genuine joy.",
      liked: true,
    },
    {
      name: "Towhidur Rahman",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      spend: 200,
      totalReviews: 14,
      rating: 3,
      date: "24-10-2022",
      review:
        "My first and only mala ordered on Etsy, and I'm beyond delighted!\nThe fun and genuine joy.",
      liked: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Reviews</h2>
        <FaBell className="text-xl text-gray-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-center">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <p className="text-2xl sm:text-3xl font-bold">
            10.0k{" "}
            <span className="text-green-500 text-sm">↑ 21%</span>
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Growth in reviews this year
          </p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <p className="text-2xl sm:text-3xl font-bold">
            4.0{" "}
            <span className="text-yellow-400">
              <FaStar className="inline" />
            </span>
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Average rating this year
          </p>
        </div>
      </div>

      {/* <div className="flex justify-end text-xs sm:text-sm text-gray-500 mb-4">
        March 2021 – February 2022
      </div> */}

      {feedbacks.map((user, idx) => (
        <ReviewCard key={idx} user={user} />
      ))}
    </div>
  );
}
