// import React from 'react'

// function Users() {
//   return (
    

// <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
 
//     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
//             <tr>
//                 <th scope="col" className="p-4">
//                     <div className="flex items-center">
//                         <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                         <label for="checkbox-all-search" className="sr-only">checkbox</label>
//                     </div>
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Position
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Status
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Action
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr className="bg-white border-b  dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200">
//                 <td className="w-4 p-4">
//                     <div className="flex items-center">
//                         <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                         <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
//                     </div>
//                 </td>
//                 <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
//                     <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"/>
//                     <div className="ps-3">
//                         <div className="text-base font-semibold">Neil Sims</div>
//                         <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
//                     </div>  
//                 </th>
//                 <td className="px-6 py-4">
//                     React Developer
//                 </td>
//                 <td className="px-6 py-4">
//                     <div className="flex items-center">
//                         <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
//                     </div>
//                 </td>
//                 <td className="px-6 py-4">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//             </tr>
           
           
           
           
//         </tbody>
//     </table>
// </div>

//   )
// }

// export default Users


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/admin/adminActions';

function Users() {
    const dispatch=useDispatch()
    const users=useSelector((state)=>state.admin.users)
    console.log("users",users);
    
    useEffect(()=>{
dispatch(fetchUsers())
    },[dispatch])
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-[640px] w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4">
               ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
               Role
              </th>
              <th scope="col" className="px-6 py-3">
                Reviews
              </th>
             
            </tr>
          </thead>


          {users.map((user,index)=>(
 <tbody>
 <tr className="bg-white border-b hover:bg-gray-50">
   <td className="p-4">
    {index+1}
   </td>
   <th
     scope="row"
     className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
   >
     <img
       className="w-10 h-10 rounded-full"
       src={user.profileImage||"/docs/images/people/profile-picture-1.jpg"}
       alt="image"
     />
     <div className="ps-3">
       <div className="text-base font-semibold">{user.name}</div>
       <div className="font-normal text-gray-500">
        {user.email}
       </div>
     </div>
   </th>
   <td className="px-6 py-4">{user.role}</td>
   <td className="px-6 py-4">
     <div className="flex items-center">
       <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
       Online
     </div>
   </td>
  
 </tr>
</tbody>
          ))}
         
        </table>
      </div>
    </div>
  );
}

export default Users;
