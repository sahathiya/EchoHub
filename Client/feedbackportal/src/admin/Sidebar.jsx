// import React from 'react'
// import logo from '../assets/feedlogo.svg'
// import { Link } from 'react-router-dom'
// import Reviews from './Reviews'
// function Sidebar() {
//   return (
//     <div className='w-54 h-screen bg-gray-100'>

//           <div className="flex items-center justify-between mb-8">
//             <Link to="/">
//               <img src={logo} alt="EchoHub Logo" className="h-8" />
//             </Link>
            
//           </div>
       
//     </div>
//   )
// }

// export default Sidebar


import React, { useState } from "react";
import {
  Home,
  Calendar,
  MessageSquare,
  ShoppingCart,
  Package,
  DollarSign,
  Truck,
  Layers,
  HelpCircle,
  Settings,
  Menu,
} from "lucide-react";
import logo from '../assets/feedlogo.svg'
import { MdOutlineReviews } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { CiLogout } from "react-icons/ci";
import axiosInstance from "../utils/axiosInstance";
import { setlogoutUser } from "../features/auth/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const navItems = [
  { label: "Dashboard", icon: Home ,link:'/'},
  { label: "Users", icon: FaUsers ,link:'/users'},
  { label: "Reviews", icon: MdOutlineReviews,link:'/reviews'},
  { label: "Settings", icon: Settings },
  { label: "Help", icon: HelpCircle },
  // { label: "Pricing", icon: DollarSign },
  // { label: "Shipping", icon: Truck },
  // { label: "Plans", icon: Layers },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
const activeUser=useSelector((state)=>state.user.user)
const dispatch=useDispatch()
const navigate=useNavigate()
const handleAdminLogout=async()=>{
  const response=await axiosInstance.post('/api/admin/logout')
  console.log('resposne of admin logout',response);
  
  dispatch(setlogoutUser())
  toast.success(response.data.message)
  navigate('/')

}
  return (
    <div className="flex font-nunito">
      <div
        className={`bg-[#e4eae7] min-h-screen flex flex-col justify-between transition-all duration-300 ${
          isOpen ? "w-52" : "w-16"
        }`}
      >
        <div>
          
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              
            
              <img src={logo} alt="EchoHub Logo" className="h-6" />
            
            
         
              {isOpen && <span className="text-lg font-semibold">EchoHub</span>}
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
  <Menu className="w-5 h-5 text-gray-600" />
</button>

          </div>

          {/* Navigation Items */}
          <nav className="mt-4 flex flex-col gap-4">
            {navItems.map(({ label, icon: Icon, badge,link }) => (
              <div

                key={label}
                onClick={()=>navigate(`${link}`)}
                className="relative group flex items-center px-4 py-2 hover:text-green-900 rounded-md cursor-pointer"
              >
                <Icon className="w-5 h-5 text-gray-700" />
                {isOpen && <span className="ml-3 text-sm">{label}</span>}
                {!isOpen && (
                  <span className="absolute left-full ml-2 whitespace-nowrap rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                    {label}
                  </span>
                )}
              
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4">
          <div className="flex items-center gap-2">
            <div 
            onClick={handleAdminLogout}
            className="w-10 h-10 bg-green-900 text-white flex items-center justify-center rounded-full text-sm">
              <CiLogout className="text-xl font-semibold"/>
            </div>
            {isOpen && (
              <div>
                <p className="text-sm font-medium">{activeUser.name}</p>
                <p className="text-xs text-gray-500">{activeUser.email}</p>
              </div>
            )}
          </div>

          {/* Help and Settings */}
          {/* <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700 hover:bg-white p-2 rounded-md cursor-pointer">
              <HelpCircle className="w-4 h-4" />
              {isOpen && <span>Help</span>}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 hover:bg-white p-2 rounded-md cursor-pointer">
              <Settings className="w-4 h-4" />
              {isOpen && <span>Settings</span>}
            </div>
          </div> */}
        </div>
      </div>

      {/* Dummy content for main area */}
      {/* <div className="flex-1 p-6">Main Content Here</div> */}
    </div>
  );
};

export default Sidebar;
