



import React from 'react';
import { FaUsers } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { PiSuitcaseSimple } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import { useSelector } from 'react-redux';



export default function About() {
  const users=useSelector((state)=>state.admin.users)
  const feedbacks=useSelector((state)=>state.feedback.feedbacks)
  const count=users.length
  console.log("count",count);
  
  const feedbackcount=feedbacks.length

  const stats = [
    { id: 1, Icon: FaUsers, value: 5 +"+", label: 'Happy Clients' },
    { id: 2, Icon: MdOutlineReviews, value: feedbackcount+'+', label: 'Reviews' },
    { id: 3, Icon: RiTeamLine, value: '50+', label: 'Team Members' },
    { id: 4, Icon: PiSuitcaseSimple, value: '5 Years', label: 'Experience' },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-nunito   text-3xl md:text-4xl font-bold text-gray-800">
          Manage your entire community<br/>
          <span className="text-green-700">in a single system</span>
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
              <p className="mt-4 text-3xl font-extrabold text-gray-800 font-nunito">{value}</p>
              <p className="  font-nunito mt-1 text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
