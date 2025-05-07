// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Registration from './pages/Registration'
// import Feedback from './pages/Feedback'
// import Sidebar from './admin/Sidebar'
// import Reviews from './admin/Reviews'
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
// import { useSelector } from 'react-redux'

// function App() {
//   const activeUser=useSelector((state)=>state.user.user)
//   if(activeUser.role==='client'){
//     return (
//       <>

//   <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/register' element={<Registration/>}/>
//     <Route path='/login' element={<Login/>}/>
//     <Route path='/feedback' element={<Feedback/>}/>

//   </Routes>

//   <ToastContainer position="bottom-right" autoClose={3000} />
//       </>
//     )
//   }else{
//    return(
//     <Routes>
//     <Route path='/sidebar' element={<Sidebar/>}/>
//     <Route path='/reviews' element={<Reviews/>}/>
//  </Routes>
//    )
//   }

// }

// export default App

// import { Route, Routes, Navigate } from 'react-router-dom'
// import './App.css'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Registration from './pages/Registration'
// import Feedback from './pages/Feedback'
// import Sidebar from './admin/Sidebar'
// import Reviews from './admin/Reviews'
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
// import { useSelector } from 'react-redux'

// function App() {
//   const activeUser = useSelector((state) => state.user.user)

//   return (
//     <>
//       <Routes>
//         {/* Public Routes */}
//         <Route path='/' element={<Home />} />
//         <Route path='/register' element={<Registration />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/feedback' element={<Feedback />} />

//         {/* Admin Routes */}
//         {activeUser?.role === 'admin' && (
//           <>

//             <Route path='/sidebar' element={<Sidebar />} />
//             <Route path='/reviews' element={<Reviews />} />
//           </>
//         )}

//         {/* Protect admin routes from client */}
//         {(activeUser?.role === 'client') && (
//           <>
//             <Route path='/sidebar' element={<Navigate to="/" />} />
//             <Route path='/reviews' element={<Navigate to="/" />} />
//           </>
//         )}
//       </Routes>

//       <ToastContainer position="bottom-right" autoClose={3000} />
//     </>
//   )
// }

// export default App

import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Feedback from "./pages/Feedback";
import Sidebar from "./admin/Sidebar";
import Reviews from "./admin/Reviews";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";
import Notifications from "./pages/Notifications";


function App() {
  const activeUser = useSelector((state) => state.user.user);

  return (
    <>
    
      {!activeUser||!activeUser.role  ? (
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/feedback" element={<Feedback />} /> */}
            
          </Routes>
        </div>
      
      ) :activeUser.role === "client" ? (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />

            <Route path="/feedback" element={<Feedback />} />
            {/* <Route path="/notifications" element={<Notifications/>}/> */}
           
          </Routes>
        </div>
      ):(
        <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/users" element={<Users/>}/>
           
          </Routes>
        </div>
      </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        // hideProgressBar={true}
        // closeOnClick
        // pauseOnHover
        // draggable
       
      />
    </>
  );
}

export default App;
