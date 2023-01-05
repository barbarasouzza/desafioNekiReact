import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import SingUp from './Pages/SingUp'
import Home from './Pages/Home'
import SingupSkills from './Pages/SingupSkills'

import './App.css'

function App() {

  return (
  <Routes>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/SingUp" element={<SingUp/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Skills" element={<SingupSkills/>}/>
  </Routes>

  )
}

export default App
