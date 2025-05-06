


// import { useEffect, useState } from "react";
// import {
//   FaStar,
//   FaRegStar,
//   FaBell,
//   FaHeart,
//   FaRegHeart,
// } from "react-icons/fa";
// import { HiOutlineChat } from "react-icons/hi";
// import { MdEmail } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchFeedbacksAdmin } from "../features/admin/adminActions";
// import axiosInstance from "../utils/axiosInstance";

// const StarRating = ({ rating }) => (
//   <div className="flex text-yellow-400">
//     {[...Array(5)].map((_, i) =>
//       i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
//     )}
//   </div>
// );

// const ReviewCard = ({ user,handleSubmit,responseText,setResponseText,setIsInputVisible,isInputVisible }) => (
//   <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6 bg-white shadow-md rounded-xl mb-6">
//     <img
//       src={user.userId.profileImage}
//       alt={user.userId.name}
//       className="w-16 h-16 rounded-full object-cover mx-auto sm:mx-0"
//     />
//     <div className="flex-1">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
//         <h3 className="font-semibold text-lg">{user.userId.name}</h3>
//         <div className="flex items-center gap-2 text-sm text-gray-500">
         
//           <span>
//   {new Date(user.createdAt).toLocaleDateString('en-GB', {
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric'
//   })}
// </span>

//         </div>
//       </div>
      
//       <div className="flex items-center space-x-4 ">
//       <p
//   className={`text-md mt-1 ${
//     user.starRating <= 2
//       ? 'text-red-600'
//       : user.starRating <= 3
//       ? 'text-yellow-600'
//       : 'text-green-600'
//   }`}
// >
//   {user.reviewLabel}
// </p>
//       <StarRating rating={user.starRating} />
//       </div>



//       <p className="mt-2 text-gray-700 whitespace-pre-line">{user.message}</p>
//       {/* <div className="flex flex-wrap gap-3 mt-4">
//         <button className="flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded">
//           <HiOutlineChat /> Public Comment
//         </button>
        
//       </div> */}

// <div className="flex flex-wrap gap-3 mt-4">
//       {!isInputVisible ? (
//         <button
//           onClick={() => setIsInputVisible(true)}
//           className="flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded"
//         >
//           <HiOutlineChat /> Public Comment
//         </button>
//       ) : (
//         <div className="flex items-center gap-2">
//           <input
//             type="text"
//             value={responseText}
//             onChange={(e) => setResponseText(e.target.value)}
//             placeholder="Enter your response"
//             className="border rounded px-2 py-1 text-sm w-64"
//           />
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 text-white text-sm px-3 py-1.5 rounded hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </div>
//       )}
//     </div>
//     </div>
//   </div>
// );

// export default function Reviews() {
//   const [isInputVisible, setIsInputVisible] = useState(false);
//   const [responseText, setResponseText] = useState('');


//   const [reviewcount,setReviewCount]=useState()
//   const [avgReview,setAvgReview]=useState()
// const dispatch=useDispatch()
// const feedbacks=useSelector((state)=>state.admin.feedbacks)
// console.log("feedbacks from admin",feedbacks);
// const handleSubmit = () => {
//   // You can send `responseText` to your backend here
//   console.log('Submitted Response:', responseText);
//   setIsInputVisible(false);  // Optionally hide input after submission
//   setResponseText('');       // Clear input
// };
//   useEffect(()=>{
//     const fetch=async()=>{
// const response=await axiosInstance.get(`/api/admin/yearlycount`)
// console.log("response",response);
// setReviewCount(response.data.totalReviews)
// setAvgReview(response.data.averageRating)
//     }

//     fetch()
// dispatch(fetchFeedbacksAdmin())
//   },[dispatch])

//  console.log(reviewcount,avgReview);
 
  
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl sm:text-3xl font-bold">Reviews</h2>
//         <FaBell className="text-xl text-gray-500" />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-center">
//         <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
//           <p className="text-2xl sm:text-3xl font-bold">
//             {reviewcount}{" "}
//             <span className="text-green-500 text-sm">↑ 10%</span>
//           </p>
//           <p className="text-gray-500 text-sm mt-1">
//             Growth in reviews this year
//           </p>
//         </div>
//         <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
//           <p className="text-2xl sm:text-3xl font-bold">
//             {avgReview}{" "}
//             <span className="text-yellow-400">
//               <FaStar className="inline" />
//             </span>
//           </p>
//           <p className="text-gray-500 text-sm mt-1">
//             Average rating this year
//           </p>
//         </div>
//       </div>

//       {/* <div className="flex justify-end text-xs sm:text-sm text-gray-500 mb-4">
//         March 2021 – February 2022
//       </div> */}

//       {feedbacks.map((user, idx) => (
//         <ReviewCard key={idx} user={user} handleSubmit={handleSubmit} isInputVisible={isInputVisible} setIsInputVisible={setIsInputVisible} responseText={responseText} setResponseText={setResponseText}/>
//       ))}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaBell,
} from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeedbacksAdmin, filterFeedbackByDate, filterFeedbackByRating } from "../features/admin/adminActions";
import axiosInstance from "../utils/axiosInstance";
import { HiSparkles } from "react-icons/hi2";
// Star rating display
const StarRating = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) =>
      i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
    )}
  </div>
);

// Single review card
const ReviewCard = ({
  user,
  handleSubmit,
  responseText,
  setResponseText,
  setIsInputVisible,
  isInputVisible,
  handleGenerate 
}) => (
 

<>
<div className="font-nunito   flex flex-col sm:flex-row gap-4 p-4 sm:p-6 bg-white shadow-md rounded-xl mb-6">
   



                    {user.userId.profileImage ? (
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                     <img
      src={user.userId.profileImage}
      alt={user.userId.name}
      className="w-16 h-16 rounded-full object-cover mx-auto sm:mx-0"
    />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-green-100 rounded-full  flex items-center justify-center text-black font-bold text-2xl">
                      {user.userId.name
                        ? user.userId.name.slice(0, 1)
                        : user.userId.email.slice(0, 1)}
                    </div>
                  )}
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h3 className="font-semibold text-lg">{user.userId.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>
            {new Date(user.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <p
          className={`text-md mt-1 ${
            user.starRating <= 2
              ? "text-red-600"
              : user.starRating <= 3
              ? "text-yellow-600"
              : "text-green-600"
          }`}
        >
          {user.reviewLabel}
        </p>
        <StarRating rating={user.starRating} />
      </div>

      <p className="mt-2 text-gray-700 whitespace-pre-line">{user.message}</p>

      <div className="flex  sm:flex-row sm:items-center flex-wrap gap-3 mt-4">
  {!isInputVisible ? (
    <button
      onClick={() => setIsInputVisible(true)}
      className="flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded w-fit"
    >
      <HiOutlineChat /> Public Comment
    </button>
  ) : (
    <>
      <input
        type="text"
        value={responseText}
        onChange={(e) => setResponseText(e.target.value)}
        placeholder="Enter your response"
        className="border rounded px-2 py-1 text-sm w-full sm:w-64"
      />

      <button
        onClick={handleSubmit}
        className="bg-green-700 text-white text-sm px-3 py-1.5 rounded hover:bg-green-600 w-fit"
      >
        Submit
      </button>

      <button
        onClick={handleGenerate}
        className="bg-green-900 text-white text-sm px-3 py-1.5 rounded hover:bg-green-800 flex items-center gap-2 w-fit"
      >
        Generate <HiSparkles />
      </button>
    </>
  )}
</div>



    </div>
  </div>







</>
);

// Main component
export default function Reviews() {
  
  const [activeReviewId, setActiveReviewId] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [reviewCount, setReviewCount] = useState();
  const [avgReview, setAvgReview] = useState();


  const [showCalendar, setShowCalendar] = useState(false);
  const [showRatingDropdown, setShowRatingDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
 
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.admin.feedbacks);

  const handleSubmit = async(reviewId) => {
    if(responseText.trim()!==""){
      console.log("Submitted Response for review", reviewId, ":", responseText);

      const response=await axiosInstance.patch(`/api/admin/feedback/respond/${reviewId}`,{response:responseText})
      console.log("response of handle submit",response);
      
      setActiveReviewId(null);
      setResponseText("");
    }
    
   
  
  };

  useEffect(() => {
  
    dispatch(fetchFeedbacksAdmin());
  }, [dispatch]);
const handleAll=()=>{
  dispatch(fetchFeedbacksAdmin());
  setShowRatingDropdown(false);
        setShowCalendar(false); 
}
// Fetch by Rating
useEffect(() => {
 dispatch(filterFeedbackByRating(selectedRating))
}, [selectedRating,dispatch]);


useEffect(()=>{
dispatch(filterFeedbackByDate(selectedDate))
},[selectedDate,dispatch])

// Fetch by Date
// useEffect(() => {
//   const fetchByDate = async () => {
//     if (!selectedDate) return;
//     try {
//       const response = await axiosInstance.get(`/api/admin/reviews`, {
//         params: { date: selectedDate },
//       });
//       console.log('Response of sort by date:', response.data);
//       setReviews(response.data);
//     } catch (error) {
//       console.error('Error fetching by date:', error);
//     }
//   };

//   fetchByDate();
// }, [selectedDate]);

  const handleGenerate=async(message)=>{

    console.log("message",message);
    const response=await axiosInstance.post(`/api/admin/respond/generate-suggestion`,{userMessage:message})

    console.log("response of generate" ,response);
    
    setResponseText(response.data.suggestion)

  }
  return (
    <div className=" font-nunito   max-w-6xl mx-auto px-4 py-10">
     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
  <h2 className="text-2xl sm:text-3xl font-bold">Reviews</h2>

  <div className="flex flex-wrap gap-3">
    <button 
      className="px-4 py-2 bg-green-900 text-white rounded"
      onClick={handleAll}
    >
      All
    </button>

    <button 
      className="px-4 py-2 bg-green-900 text-white rounded"
      onClick={() => {
        setShowRatingDropdown(!showRatingDropdown);
        setShowCalendar(false);
      }}
    >
      Sort by Rating
    </button>

    <button
      className="px-4 py-2 bg-green-900 text-white rounded"
      onClick={() => {
        setShowCalendar(!showCalendar);
        setShowRatingDropdown(false);
      }}
    >
      Sort by Date
    </button>
  </div>
</div>


      {showCalendar && (
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded p-2 w-48"
        />
      )}

      {showRatingDropdown && (
        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="border rounded p-2 w-48"
        >
          <option value="">Select Rating</option>
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      )}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-center">
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
      </div> */}

      {feedbacks && feedbacks.length > 0 ? (
        feedbacks.map((review) => (
          <ReviewCard
            key={review._id}
            user={review}
            isInputVisible={activeReviewId === review._id}
            setIsInputVisible={(visible) =>
              setActiveReviewId(visible ? review._id : null)
            }
            responseText={responseText}
            setResponseText={setResponseText}
            handleSubmit={() => handleSubmit(review._id)}
            handleGenerate={()=>handleGenerate(review.message)}
            
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No reviews found.</p>
      )}
    </div>
  );
}
