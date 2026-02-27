import React, { useState } from 'react'
import { Trash2 } from 'lucide-react';

const Tasks = () => {
       const [text, setText] = useState('')
       const [task, setTask] = useState([])
       const [error, setError] = useState('')
       const addTask = () => {
              if (text.trim() === '') {
                     setError('Please enter a task')
                     setText('')
                     return
              }//text.trim() === '' by using this we  compare the text with empty string and if it is empty then we show error message by this line setError('Please enter a task') and we also clear the text input by this line setText('') the return statement is used to exit the function and prevent the code below it from executing. If the text is not empty, we clear any previous error messages by setting setError('') and then we add the new task to the task array using setTask([...task, {id : }]) and finally we clear the text input by setting setText('')
              else {
                     setError('')
                     setTask([...task, {
                            id: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                            text: text,
                            completed: false
                     }])// here we are using the spread operator ... to create a new array that contains all the existing tasks in the task array, and then we add a new task object to the end of the array. The new task object has an id property that is set to the current date and time formatted as a string, a text property that is set to the value of the text state variable, and a completed property that is set to false. This way we can keep track of each task with its unique id and also we can mark it as completed or not completed.
                     setText('')
              }
       }
       return (
              <div className='bg-black h-screen w-screen flex flex-col items-center justify-start gap-5 pt-10  text-amber-50' >

                     <h1 className='text-2xl font-bold'> My Tasks</h1>

                     <input type="text" placeholder='Type your task here' value={text} maxLength={50} className='bg-white text-red-800' onChange={(e) => { setText(e.target.value) }} />

                     {/*  here the 2 way binding is used to bind the value of the input field to the state variable text and also to update the state variable text when the user types in the input field. The value attribute of the input field is set to the state variable text, which means that the input field will always display the current value of text. The onChange event handler is used to update the state variable text whenever the user types in the input field. When the user types something, the onChange event is triggered, and the setText function is called with the new value of the input field (e.target.value), which updates the state variable text accordingly. */}

                     <button onClick={addTask} className='bg-amber-500  text-black'>Add task</button>
                     {error && <p className='text-red-800'>{error}</p>}
                     {/* when the button clicks then the addTask function is called and then it performes the task of adding a new task to the list at first it checks is ther any empty string or noe then it shows the error and if there is any error it shows the error messge which is "write something" and clear the imput field if there is text it atfirst clears the error then put the text inside the text veriable and it stores insode the task verieable along with somne other values which ar id and complete*/}

                     <div> {/*now we will show the list of tasks here and we will also add a delete button to delete the task from the list and also we will add a checkbox to mark the task as completed or not completed we do this by this logic which is at first we use task.map which give me the acces of every element of and every obj have a idx the map returns a div indise this div we give this div a key which is idx then i do the numbering of very task using this line  idx+1 and then there comes a checkbox then i do this here we show the text of the task and also the id of the task using this elem.textand elem.id then there is a button which acts as a clear text buton inside this there is a eventhandler which trigers a arrow function whi do the operation of filter where i compare idx2 with the idx*/}
                            {task.map((elem, idx) => (
                                   <div key={idx} className='flex items-center gap-2'>
                                          {idx + 1}
                                          <input type="checkbox" name="list" className="ml-2 bg-amber-800" />{elem.text} {elem.id}
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