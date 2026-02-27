import React, { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react';

const Tasks = () => {
       const [text, setText] = useState('')
       const [task, setTask] = useState(() => {
              const storedTasks = localStorage.getItem("tasks")
              if(storedTasks){
                     return JSON.parse(storedTasks)
              }
              else{return []}
       })
       const [error, setError] = useState('')

       useEffect(() => {
              localStorage.setItem('tasks', JSON.stringify(task))
       }, [task])


       const addTask = () => {
              if (text.trim() === '') {
                     setError('Please enter a task')
                     setText('')
                     return
              }
              else {
                     setError('')
                     setTask([...task, {
                            id: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                            text: text,
                            completed: false
                     }])
                     setText('')
              }
       }

       return (
              <div className='bg-black h-screen w-screen flex flex-col items-center justify-start gap-5 pt-10  text-amber-50' >

                     <h1 className='text-2xl font-bold'> My Tasks</h1>

                     <input type="text" placeholder='Type your task here' value={text} maxLength={50} className='bg-white text-red-800' onChange={(e) => { setText(e.target.value) }} />

                     <button onClick={addTask} className='bg-amber-500  text-black'>Add task</button>
                     {error && <p className='text-red-800'>{error}</p>}

                     <div>
                            {task.map((elem, idx) => (
                                   <div key={idx} className='flex items-center gap-2'>
                                          <p>{idx + 1}</p>
                                          <input type="checkbox" name="list" className="ml-2 bg-amber-800" checked={elem.completed} onChange={(e) => {
                                                 const updatedTask = [...task]
                                                 updatedTask[idx].completed = e.target.checked
                                                 setTask(updatedTask)
                                          }} />
                                          <p className={elem.completed ? "line-through text-amber-600" : ""}>{elem.text} {elem.id}</p>
                                          <button onClick={() => {
                                                 setTask(task.filter((elem, idx2) => {
                                                        return idx2 !== idx
                                                 }))
                                          }}>
                                                 <Trash2 />
                                          </button>
                                   </div>
                            ))}
                     </div>

                     {task.length !== 0 && <p className='text-amber-500'>{task.length} tasks added</p>}

              </div >
       )
}

export default Tasks 