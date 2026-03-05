import React, { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react';

const Tasks = () => {
       const [text, setText] = useState('')
       const [task, setTask] = useState(() => {
              const storedTasks = localStorage.getItem("tasks")
              if (storedTasks) {
                     return JSON.parse(storedTasks)
              }
              else { return [] }
       })
       const [error, setError] = useState('')

       useEffect(() => {
              localStorage.setItem('tasks', JSON.stringify(task))
       }, [task])

       const addTask = (e) => {
              e.preventDefault()

              if (text.trim() === '') {
                     setError('Please enter a task')
                     setText('')
                     return
              } else {
                     setError('')
                     setTask([...task, {
                            id: new Date().toLocaleString(),
                            text: text,
                            completed: false
                     }])
                     setText('')
              }
       }

       return (
              <div className="h-screen bg-gray-900 flex justify-center pt-28 pb-9 px-4 text-white overflow-hidden">

                     <div className="w-full max-w-1/2 bg-gray-800 p-5 rounded-xl shadow-xl flex flex-col">

                            <form onSubmit={addTask} className="flex flex-col gap-5">

                                   <h1 className="text-3xl font-bold text-center text-amber-400 tracking-wide">
                                          My Tasks
                                   </h1>

                                   <div className="flex flex-col sm:flex-row gap-3">

                                          <input
                                                 type="text"
                                                 placeholder="Type your task..."
                                                 value={text}
                                                 maxLength={50}
                                                 onChange={(e) => setText(e.target.value)}
                                                 className="flex-1 px-4 py-2 rounded-lg bg-gray-700 outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"
                                          />

                                          <button
                                                 type="submit"
                                                 className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-semibold transition sm:w-auto w-full"
                                          >
                                                 Add
                                          </button>

                                   </div>

                                   {error && (
                                          <p className="text-red-400 text-sm text-center">
                                                 {error}
                                          </p>
                                   )}

                            </form>

                            {/* Task List */}
                            <div className="mt-6 flex flex-col gap-3 flex-1 overflow-y-auto overflow-x-hidden pr-1 max-h-[50vh]">

                                   {task.map((elem, idx) => (
                                          <div
                                                 key={elem.idx}
                                                 className="flex items-start justify-between bg-gray-700 px-4 py-3 rounded-lg gap-3"
                                          >

                                                 <div className="flex items-start gap-3 w-full">

                                                        <input
                                                               type="checkbox"
                                                               checked={elem.completed}
                                                               className="mt-1"
                                                               onChange={(e) => {
                                                                      const updatedTask = [...task]
                                                                      updatedTask[idx].completed = e.target.checked
                                                                      setTask(updatedTask)
                                                               }}
                                                        />

                                                        <p className={`w-full wrap-break-word text-sm ${elem.completed ? "line-through text-gray-400" : ""}`}>
                                                               {elem.text}
                                                        </p>

                                                 </div>

                                                 <button
                                                        onClick={() => {
                                                               setTask(task.filter((_, idx2) => idx2 !== idx))
                                                        }}
                                                        className="text-red-400 hover:text-red-600 shrink-0"
                                                 >
                                                        <Trash2 size={18} />
                                                 </button>

                                          </div>
                                   ))}

                            </div>

                            {task.length !== 0 && (
                                   <p className="text-center text-sm text-gray-400 mt-2">
                                          {task.length} tasks added
                                   </p>
                            )}
                            {
                                   task.length === 0 && (
                                          <p className="text-center text-sm text-gray-400 mt-2">
                                                 No tasks added yet
                                          </p>
                                   )
                            }
                            {
                                   task.length > 7 && (
                                          <p className="text-center text-sm text-red-400 mt-2">
                                                 You have a lot of tasks! Consider prioritizing them.
                                          </p>
                                   )
                            }
                            {
                                   task.length == 0 || task.length - 1 && (
                                          <p className="text-center text-sm text-teal-400 mt-2">
                                                 {task.length==0} no tasks remaining! Great job!
                                                 {task.length - 0} tasks remaining! Keep going!
                                          </p>
                                   )
                            }
                     </div>

              </div>
       )
}

export default Tasks