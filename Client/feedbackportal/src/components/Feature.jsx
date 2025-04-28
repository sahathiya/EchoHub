// import React from 'react'
// import home4 from '../assets/home4.png'
// function Feature() {
//   return (
//     <div>

//         <div className='flex justify-between space-x-4'>
//             <div>
//                 <img src={home4}  className="w-full h-[500px] object-contain"/>
//             </div>
//             <div>
//                 <h1>About us</h1>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Feature

// import React from 'react';
// import home4 from '../assets/home4.png';

// function Feature() {
//   return (
//     <div className="py-12 bg-gray-50">

//       {/* Feature Section */}
//       <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 px-6 md:px-12">
        
//         {/* Image Section */}
//         <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
//           <img
//             src={home4}
//             alt="Feature"
//             className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <h1 className="text-3xl font-semibold text-gray-800 tracking-wide leading-tight">
//             About Us
//           </h1>
//           <p className="text-gray-600 text-lg leading-relaxed">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
//             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />
//             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//           </p>

//           {/* Call to Action Button */}
//           <div className="mt-6">
//             <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition-colors duration-300">
//               Learn More
//             </button>
//           </div>
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
    <div className="py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 px-6 md:px-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2  overflow-hidden ">
          <img
            src={home4}
            alt="Feature"
            className="w-full h-auto text-green-400"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800 tracking-wide leading-tight">
            About Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
          <button className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
