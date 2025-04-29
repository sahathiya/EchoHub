
// import React from 'react';
// import home4 from '../assets/home4.svg';

// function Feature() {
//   return (
//     <div className="py-12 bg-gray-50">
//       <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 px-6 md:px-12">
        
//         {/* Image Section */}
//         <div className="w-full md:w-1/2  overflow-hidden ">
//           <img
//             src={home4}
//             alt="Feature"
//             className="w-full h-auto text-green-400"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <h1 className="text-3xl font-semibold text-gray-800 tracking-wide leading-tight">
//             About Us
//           </h1>
//           <p className="text-gray-600 text-lg leading-relaxed">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
//             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
//           </p>
//           <button className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition-colors duration-300">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Feature;
import React from 'react';
import home4 from '../assets/home4.svg';

function Feature() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 px-6 md:px-12">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            About Us
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br />
            It has been the industry's standard dummy text ever since the 1500s...
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-4 px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={home4}
            alt="Feature Illustration"
            className="w-64 sm:w-80 md:w-full max-w-md object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
        
      </div>
    </section>
  );
}

export default Feature;

