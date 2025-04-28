
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'

function App() {
  
  return (
    <>
{/* <Home/> */}

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
    </>
  )
}

export default App
