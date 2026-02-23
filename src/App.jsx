import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Tasks from './pages/Tasks'
import Weather from './pages/Weather'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </div>
  )
}

export default App