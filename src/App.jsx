import React from 'react'
import { useState } from 'react';
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Tasks from './pages/Tasks'
import Profile from './pages/Profile'
const App = () => {
  //global state
  const [allNotes, setAllNotes] = useState([])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home allNotes={allNotes} />} />
        <Route path='/notes' element={<Notes allNotes={allNotes} setAllNotes={setAllNotes} />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App