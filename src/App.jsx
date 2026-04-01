import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Tasks from './pages/Tasks'
import Profile from './pages/Profile'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App