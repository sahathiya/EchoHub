import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeedbacks } from "../features/feedback/feedbackActions";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }

  return <div className="flex gap-1 justify-center mt-4">{stars}</div>;
}

function Testimonials() {
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.feedback.feedbacks);
  const { loading, error } = useSelector((state) => state.feedback.feedbacks);
  console.log("feedbacks", feedbacks);

  useEffect(() => {
    dispatch(fetchFeedbacks());
  }, [dispatch]);
  if (loading) return <p>Loading feedbacks...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className=" font-nunito text-4xl font-bold text-gray-800 mb-4">
          Let’s Hear What Our Clients Have to Say About Us!
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Don’t believe us, let’s hear from the candidates who have registered
          with us for their job needs and what they have to say about their
          experience.
        </p>

        <div className="px-4 py-10 md:px-8 lg:px-16 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {feedbacks.map((item) => (
              <SwiperSlide key={item._id} className="flex justify-center">
                <div className="w-full h-[420px] max-w-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-green-100 flex flex-col items-center justify-between">
                  <div className="flex flex-col items-center">
                    {item.userId.profileImage ? (
                      <img
                        src={item.userId.profileImage}
                        alt={item.userId.name}
                        className="w-20 h-20 rounded-full object-cover mt-10 shadow-lg border-4 border-white"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-green-100 rounded-full  flex items-center justify-center text-black font-bold text-4xl mt-10 shadow-lg border-4 border-white">
                        {item.userId.name
                          ? item.userId.name.slice(0, 1)
                          : item.userId.email.slice(0, 1)}
                      </div>
                    )}

                    <h3 className=" font-nunito mt-4 text-lg font-semibold text-gray-800">
                      {item.userId.name}
                    </h3>
                    <p className=" font-nunito text-gray-700 mt-4 text-sm leading-relaxed line-clamp-6 text-center">
                      {item.message}
                    </p>
                  </div>
                  <StarRating rating={Number(item.starRating) || 0} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
