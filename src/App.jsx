import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Tasks from './pages/Tasks'
import Profile from './pages/Profile'

const App = () => {
  //global state
  const [allNotes, setAllNotes] = useState([])//for notes page
  const [task, setTask] = useState(() => {
    const storedTasks = localStorage.getItem("tasks")
    if (storedTasks) {
      return JSON.parse(storedTasks)
    }
    else { return [] }
  })
  const [error, setError] = useState('')//for tasks page

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task))
  }, [task])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home allNotes={allNotes} setTask={setTask} />} />
        <Route path='/notes' element={<Notes allNotes={allNotes} setAllNotes={setAllNotes} />} />
        <Route path='/tasks' element={<Tasks task={task} setTask={setTask} error={error} setError={setError} />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App