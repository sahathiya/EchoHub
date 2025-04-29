
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Feedback from './pages/Feedback'
import Sidebar from './admin/Sidebar'
import Reviews from './admin/Reviews'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <>
{/* <Home/> */}

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/feedback' element={<Feedback/>}/>
  <Route path='/sidebar' element={<Sidebar/>}/>
  <Route path='/reviews' element={<Reviews/>}/>
</Routes>

<ToastContainer position="bottom-right" autoClose={3000} />
    </>
  )
}

export default App
