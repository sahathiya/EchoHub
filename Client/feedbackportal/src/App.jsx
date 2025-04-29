
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Feedback from './pages/Feedback'

function App() {
  
  return (
    <>
{/* <Home/> */}

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/feedback' element={<Feedback/>}/>
</Routes>
    </>
  )
}

export default App
