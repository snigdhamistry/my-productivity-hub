import React, { useState } from 'react'

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

              <>
                     <h1>My Tasks</h1>

                     <input onChange={(e) => { setText(e.target.value) }} type="text" placeholder='Type your task here' value={text} maxLength={50} />

                     <button onClick={addTask} >Add task</button>
                     {error && <p className='text-red-800'>{error}</p>}
                     <div>
                            {task.map((elem, idx) => {
                                   return <div key={idx}>{idx + 1}
                                          <input type="checkbox" name="list" />{elem}
                                   </div>
                            })}
                     </div>
              </>
       )
}

export default Tasks 