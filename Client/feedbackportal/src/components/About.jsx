// import React from 'react'
// import { FaUsers } from "react-icons/fa6";
// function About() {
//   return (
//     <div>
//       <div className='flex justify-evenly'>
//       <div className='flex-col'>
//       <FaUsers />
//       <p>200</p>
//       </div>

//       <div className='flex-col space-y-2'>
//       <FaUsers />
//       <p>200</p>
//       </div>

//       <div className='flex-col'>
//       <FaUsers />
//       <p>200</p>
//       </div>

//       <div className='flex-col'>
//       <FaUsers />
//       <p>200</p>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default About
import React from 'react';
import { FaUsers } from "react-icons/fa6";
// import { GoProject } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";
import { PiSuitcaseSimple } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
function About() {
  return (
    <div className="py-12 bg-gray-50">
 <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
  <span className="block">Manage your entire community</span>
  <span className="block">in a single system</span>
</h2>

      <div className="flex justify-evenly  gap-8">
       
        {/* Single Stat Box */}
        <div className="flex flex-col items-center space-y-2">
          <FaUsers className="text-5xl text-green-900" />
          <p className="text-2xl font-bold text-gray-800">200+</p>
          <p className="text-gray-500 text-sm">Happy Clients</p>
        </div>

        {/* Repeat for more boxes */}
        <div className="flex flex-col items-center space-y-2">
          <MdOutlineReviews className="text-5xl text-green-900" />
          <p className="text-2xl font-bold text-gray-800">150+</p>
          <p className="text-gray-500 text-sm">Reviews</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <RiTeamLine className="text-5xl text-green-900" />
          <p className="text-2xl font-bold text-gray-800">50+</p>
          <p className="text-gray-500 text-sm">Team Members</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <PiSuitcaseSimple className="text-5xl text-green-900" />
          <p className="text-2xl font-bold text-gray-800">5 Years</p>
          <p className="text-gray-500 text-sm">Experience</p>
        </div>

      </div>
    </div>
  );
}

export default About;
