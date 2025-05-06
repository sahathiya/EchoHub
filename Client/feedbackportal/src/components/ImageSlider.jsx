import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import customerfeedback from "../assets/customer-feedback.png";
import home2 from "../assets/customer-feedbacks.png";
import home3 from "../assets/customer-feedback3.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const ImageSlider = () => {
  const navigate = useNavigate();

  const activeUser = useSelector((state) => state.user.user);
  console.log("activeUser", activeUser);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };
  const handleNavigate = () => {
    if (activeUser === null || !activeUser || !activeUser.role) {
      return toast.warn("Please login");
    } else {
      navigate("/feedback");
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gray-100 min-h-screen">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          EchoHub: <br />
          <span className="text-green-700">Listen better. Grow faster.</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Where every client's voice shapes your success.
        </p>
        <button
          onClick={handleNavigate}
          className="group flex items-center space-x-2 bg-green-700 text-white px-6 py-3 rounded-md
                 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2
                 transition"
        >
          <span className="font-medium">Rate Us</span>
          <FaLongArrowAltRight
            className="transition-transform duration-200 group-hover:translate-x-1"
            size={18}
          />
        </button>
      </div>

      {/* Image Slider */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <div className="w-[300px] md:w-[400px] lg:w-[500px]">
          <Slider {...settings}>
            <div>
              <img
                src={customerfeedback}
                alt="Online Wishes 1"
                className="w-full h-[500px] object-contain"
              />
            </div>
            <div>
              <img
                src={home2}
                alt="Online Wishes 2"
                className="w-full h-[500px] object-contain"
              />
            </div>
            <div>
              <img
                src={home3}
                alt="Online Wishes 3"
                className="w-full h-[500px] object-contain"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
