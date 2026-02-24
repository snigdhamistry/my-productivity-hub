import React, { useState } from 'react'
import { Trash2 } from 'lucide-react';

const Tasks = () => {
       const [text, setText] = useState('')
       const [task, setTask] = useState([])
       const [error, setError] = useState('')
       const addTask = () => {
              if (text.trim() === '') {
                     setError('write something')
                     setText('')
                     return

              }
              else {
                     setError('')
                     setTask([...task, text])
                     setText('')
              }
       }
       return (
              <div className='bg-black h-screen w-screen flex flex-col items-center justify-start gap-5 pt-10' >
                     <h1 className='text-2xl font-bold text-amber-50'> My Tasks</h1>

                     <input type="text" placeholder='Type your task here' value={text} maxLength={50} className='bg-white' onChange={(e) => { setText(e.target.value) }} />

                     <button onClick={addTask} className='bg-amber-500'>Add task</button>
                     {error && <p className='text-red-800'>{error}</p>}
                     <div>
                            {task.map((elem, idx) => {
                                   return <div key={idx} className='text-white flex items-center gap-2'>
                                          {/* {idx + 1} */}
                                          <input type="checkbox" name="list" className="ml-2 bg-amber-800" />{elem}
                                          <button onClick={() => {
                                                 setTask(task.filter((elem, idx2) => {
                                                        return idx2 !== idx
                                                 }))
                                          }}>
                                                 <Trash2 />
                                          </button>
                                   </div>
                            })}
                     </div>
              </div >
       )
}

export default Tasks 