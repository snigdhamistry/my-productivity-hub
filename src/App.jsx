import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Theme from './components/Theme'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Tasks from './pages/Tasks'
import Weather from './pages/Weather'
import Profile from './pages/Profile'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/theme' element={<Theme />} />
      </Routes>
    </div>
  )
}

export default App