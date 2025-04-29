
// import React from 'react';
// import { FaUsers } from "react-icons/fa6";

// import { RiTeamLine } from "react-icons/ri";
// import { PiSuitcaseSimple } from "react-icons/pi";
// import { MdOutlineReviews } from "react-icons/md";
// function About() {
//   return (
//     <div className="py-12 bg-gray-50">
//  <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
//   <span className="block">Manage your entire community</span>
//   <span className="block">in a single system</span>
// </h2>

//       <div className="flex justify-evenly  gap-8">
       
//         {/* Single Stat Box */}
//         <div className="flex flex-col items-center space-y-2">
//           <FaUsers className="text-5xl text-green-900" />
//           <p className="text-2xl font-bold text-gray-800">200+</p>
//           <p className="text-gray-500 text-sm">Happy Clients</p>
//         </div>

//         {/* Repeat for more boxes */}
//         <div className="flex flex-col items-center space-y-2">
//           <MdOutlineReviews className="text-5xl text-green-900" />
//           <p className="text-2xl font-bold text-gray-800">150+</p>
//           <p className="text-gray-500 text-sm">Reviews</p>
//         </div>

//         <div className="flex flex-col items-center space-y-2">
//           <RiTeamLine className="text-5xl text-green-900" />
//           <p className="text-2xl font-bold text-gray-800">50+</p>
//           <p className="text-gray-500 text-sm">Team Members</p>
//         </div>

//         <div className="flex flex-col items-center space-y-2">
//           <PiSuitcaseSimple className="text-5xl text-green-900" />
//           <p className="text-2xl font-bold text-gray-800">5 Years</p>
//           <p className="text-gray-500 text-sm">Experience</p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default About;


import React from 'react';
import { FaUsers } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { PiSuitcaseSimple } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";

const stats = [
  { id: 1, Icon: FaUsers, value: '200+', label: 'Happy Clients' },
  { id: 2, Icon: MdOutlineReviews, value: '150+', label: 'Reviews' },
  { id: 3, Icon: RiTeamLine, value: '50+', label: 'Team Members' },
  { id: 4, Icon: PiSuitcaseSimple, value: '5 Years', label: 'Experience' },
];

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Manage your entire community<br/>
          <span className="text-green-600">in a single system</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ id, Icon, value, label }) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center"
            >
              <div className="bg-green-100 p-4 rounded-full animate-pulse">
                <Icon className="text-green-600 w-8 h-8" />
              </div>
              <p className="mt-4 text-3xl font-extrabold text-gray-800">{value}</p>
              <p className="mt-1 text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
