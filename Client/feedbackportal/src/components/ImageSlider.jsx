// import { useState, useEffect } from "react";

// const images = [
//   "https://img.freepik.com/free-vector/man-using-laptop-cartoon_1308-118233.jpg?t=st=1745735072~exp=1745738672~hmac=69164795528777b3a0aa7a6babb1a4fecfb062e8a9826bbe7f44e31dbc9e44d3&w=740",
//   "https://img.freepik.com/free-vector/elegant-businessman-using-laptop-character_18591-82588.jpg?t=st=1745735092~exp=1745738692~hmac=c67cd0f19b2064974016d84db21b75996b165b1df326810ddf8a81ae36f8b3bf&w=740",
//   "https://img.freepik.com/free-vector/man-working-laptop-with-coffee-stationary-cartoon-vector-illustration_138676-2206.jpg?t=st=1745735108~exp=1745738708~hmac=5fa6f97fc2a373fa7a4ade38f6ab4bc9966f4b9a34f179c218bf3a01182404a7&w=900",
// ];

// export default function ImageSlider() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent(prev => (prev + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup
//   }, []);

//   return (
//     <div className="w-full h-[400px] overflow-hidden relative">
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt={`Slide ${index}`}
//           className={`w-500 h-500 object-cover absolute transition-all duration-1000 ease-in-out ${
//             index === current ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       ))}
//     </div>
//   );
// }


// import React from 'react';
// import Slider from 'react-slick';

// const TextAndSvgSlider = () => {
//   const settings = {
//     dots: true, // Show dots for navigation
//     infinite: true, // Infinite loop
//     speed: 500, // Transition speed
//     slidesToShow: 1, // Only show one slide at a time
//     slidesToScroll: 1, // Scroll one slide at a time
//     autoplay: true, // Auto play the slider
//     autoplaySpeed: 2000, // Time between transitions
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div className="slide">
//           <svg width="100" height="100" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="blue" />
//           </svg>
//           <p className="slide-text">Text 1</p>
//         </div>
//         <div className="slide">
//           <svg width="100" height="100" viewBox="0 0 100 100">
//             <rect width="80" height="80" style={{ fill: 'green', strokeWidth: 3, stroke: 'black' }} />
//           </svg>
//           <p className="slide-text">Text 2</p>
//         </div>
//         <div className="slide">
//           <svg width="100" height="100" viewBox="0 0 100 100">
//             <line x1="10" y1="10" x2="90" y2="90" style={{ stroke: 'red', strokeWidth: 2 }} />
//           </svg>
//           <p className="slide-text">Text 3</p>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default TextAndSvgSlider;

// import React from 'react';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const TextAndSvgSlider = () => {
//   const settings = {
//     dots: true, // Show dots for navigation
//     infinite: true, // Infinite loop
//     speed: 500, // Transition speed
//     slidesToShow: 1, // Only show one slide at a time
//     slidesToScroll: 1, // Scroll one slide at a time
//     autoplay: true, // Auto play the slider
//     autoplaySpeed: 1500, // Time between transitions
//     arrows: true, // Show navigation arrows
//   };

//   return (
//     <div className="slider-container" style={{ width: '80%', margin: 'auto' }}>
//       <Slider {...settings}>
//         <div className="slide flex justify-evenly">
        
          
//           <img src='https://img.freepik.com/free-vector/telecommuting-concept_23-2148488792.jpg?t=st=1745736747~exp=1745740347~hmac=22ffc1f48fd5d0fd953840d12216048a1f6fabc0b11a37281b67a43a7fefd71d&w=900' className='w-[500px] h-[500px]'/>
//           <p className="slide-text">Text 1 - Circle</p>
//         </div>
//         <div className="slide">
          
//           <img src='https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg?t=st=1745736876~exp=1745740476~hmac=b435ab2e73d7510b0f46a991c3ebcc3b587e7bf2aa6447e4b849851027e5529d&w=900' className='w-[500px] h-[500px]'/>
//           <p className="slide-text">Text 2 - Square</p>
//         </div>
//         <div className="slide">
          
//           <img src='https://img.freepik.com/free-vector/online-wishes-concept-illustration_114360-4241.jpg?t=st=1745736957~exp=1745740557~hmac=148074ba339817adc2ae8c98da718a42f735933c2b8d930b4a6a4f0a18531117&w=900' className='w-[500px] h-[500px]'/>
//           <p className="slide-text">Text 3 - Line</p>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default TextAndSvgSlider;

// import React from 'react';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import home1 from '../assets/home1.png'
// const TextAndSvgSlider = () => {
//   const settings = {
//     dots: true, // Show dots for navigation
//     infinite: true, // Infinite loop
//     speed: 500, // Transition speed
//     slidesToShow: 1, // Only show one slide at a time
//     slidesToScroll: 1, // Scroll one slide at a time
//     autoplay: true, // Auto play the slider
//     autoplaySpeed: 1500, // Time between transitions
//     arrows: true, // Show navigation arrows
//   };

//   return (
//     <div className="slider-container " style={{ width: '80%', margin: 'auto' }}>
//       <Slider {...settings}>
//         <div className="slide flex-row  justify-evenly space-x-8 ">
         
//           <img
//             src={home1}
//             alt="Telecommuting"
//             className="w-[500px] h-[500px] object-contain"
//           />
//            <p className="slide-text text-2xl w-1/2 text-green-900">Text 1 - Circle</p>
//         </div>
//         <div className="slide flex items-center justify-between space-x-8">
//           {/* <p className="slide-text text-2xl w-1/2">Text 2 - Square</p> */}
//           <img
//             src="https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg?t=st=1745736876~exp=1745740476~hmac=b435ab2e73d7510b0f46a991c3ebcc3b587e7bf2aa6447e4b849851027e5529d&w=900"
//             alt="Online Dating"
//             className="w-[500px] h-[500px] object-contain"
//           />
//         </div>
//         <div className="slide flex items-center justify-between space-x-8">
//           {/* <p className="slide-text text-2xl w-1/2">Text 3 - Line</p> */}
//           <img
//             src="https://img.freepik.com/free-vector/online-wishes-concept-illustration_114360-4241.jpg?t=st=1745736957~exp=1745740557~hmac=148074ba339817adc2ae8c98da718a42f735933c2b8d930b4a6a4f0a18531117&w=900"
//             alt="Online Wishes"
//             className="w-[500px] h-[500px] object-contain"
//           />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default TextAndSvgSlider;


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
//  import home1 from '../assets/home1.png'
//  import home2 from '../assets/home2.png'
//  import home3 from '../assets/home3.png'
// const InsightsSection = () => {

//     const settings = {
//     dots: true, // Show dots for navigation
//     infinite: true, // Infinite loop
//     speed: 500, // Transition speed
//     slidesToShow: 1, // Only show one slide at a time
//     slidesToScroll: 1, // Scroll one slide at a time
//     autoplay: true, // Auto play the slider
//     autoplaySpeed: 1500, // Time between transitions
//     arrows: true, // Show navigation arrows
//   };
//   return (
//     <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gray-100 min-h-screen">
//       {/* Text Content */}
//       <div className="text-center md:text-left md:w-1/2">
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
//           Lessons and insights <br />
//           <span className="text-green-900">from 8 years</span>
//         </h1>
//         <p className="text-gray-600 mb-8">
//           Where to grow your business as a photographer: site or social media?
//         </p>
//         <button className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
//           Register
//         </button>
//       </div>

//       {/* Image */}
//       <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
//         {/* <img
//           src={home1}// <-- Replace with your actual image path
//           alt="Lessons Illustration"
//           className="w-full max-w-md"
//         /> */}
// <Slider {...settings}>
//         <div className="slide flex items-center justify-between space-x-8">
//           <img
//             src={home1}
//             alt="Online Wishes"
//             className="w-[500px] h-[500px] object-contain"
//           />
//         </div>

//         <div className="slide flex items-center justify-between space-x-8">
//           <img
//             src={home2}
//             alt="Online Wishes"
//             className="w-[500px] h-[500px] object-contain"
//           />
//         </div>
//         <div className="slide flex items-center justify-between space-x-8">
//           <img
//             src={home3}
//             alt="Online Wishes"
//             className="w-[500px] h-[500px] object-contain"
//           />
//         </div>
//       </Slider>
//       </div>
//     </section>
//   );
// };

// export default InsightsSection;


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import home1 from '../assets/home1.png';
// import home2 from '../assets/home2.png';
// import home3 from '../assets/home3.png';
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
// const ImageSlider = () => {
//   const navigate=useNavigate()
//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1500, // 3 seconds
//     arrows: false,
//   };

//   return (
//     <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gray-100 min-h-screen">
//       {/* Text Content */}
//       <div className="text-center md:text-left md:w-1/2">
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
//         EchoHub: <br />
//           <span className="text-green-900">Listen better. Grow faster.</span>
//         </h1>
//         <p className="text-gray-600 mb-8">
//         Where every client's voice shapes your success.
//         </p>
//         <button
//         onClick={()=>navigate('/feedback')}
//       className="group flex items-center space-x-2 bg-green-900 text-white px-6 py-3 rounded-md
//                  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2
//                  transition"
//     >
//       <span className="font-medium">Rate Us</span>
//       <FaLongArrowAltRight
//         className="transition-transform duration-200 group-hover:translate-x-1"
//         size={18}
//       />
//     </button>
        
//       </div>

//       {/* Image Slider */}
//       <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
//         <div className="w-[300px] md:w-[400px] lg:w-[500px]">
//           <Slider {...settings}>
//             <div>
//               <img
//                 src={home1}
//                 alt="Online Wishes 1"
//                 className="w-full h-[500px] object-contain"
//               />
//             </div>
//             <div>
//               <img
//                 src={home2}
//                 alt="Online Wishes 2"
//                 className="w-full h-[500px] object-contain"
//               />
//             </div>
//             <div>
//               <img
//                 src={home3}
//                 alt="Online Wishes 3"
//                 className="w-full h-[500px] object-contain"
//               />
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageSlider;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ImageSlider = () => {
  const navigate = useNavigate();

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // 2.5 seconds for smooth transition
    arrows: false,
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-gradient-to-r from-green-50 to-white min-h-screen">
      
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          EchoHub: <br />
          <span className="text-green-700">Listen better. Grow faster.</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
          Where every client's voice shapes your success. Engage, collect feedback, and elevate your business.
        </p>
        <button
          onClick={() => navigate('/feedback')}
          className="group flex items-center space-x-3 bg-green-700 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
        >
          <span className="font-medium">Rate Us</span>
          <FaLongArrowAltRight className="transition-transform duration-200 group-hover:translate-x-1" size={18} />
        </button>
      </div>

      {/* Image Slider */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center ">
        <div className="w-full max-w-lg md:max-w-md lg:max-w-lg">
          <Slider {...settings}>
            <div>
              <img
                src={home1}
                alt="Feature 1"
                className="w-full h-[450px] object-cover rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div>
              <img
                src={home2}
                alt="Feature 2"
                className="w-full h-[450px] object-cover rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div>
              <img
                src={home3}
                alt="Feature 3"
                className="w-full h-[450px] object-cover rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
