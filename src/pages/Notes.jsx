import React from 'react'
import { useState } from 'react';
const Notes = () => {
       const [input, setInput] = useState('')
       const [text, setText] = useState('')
       const [allNotes, setAllNotes] = useState([])
       const [error, setError] = useState('')
       const addtask = (e) => {
              e.preventDefault()
              if (input.trim() === '' || text.trim() === '') {
                     setError("please fill all the fields")
              } else {
                     setError('')

              }
       }
       return (
              <div className="h-screen bg-gray-900 flex justify-center pt-28 pb-9 px-4 text-white overflow-hidden">
                     <form onSubmit={addtask} className="w-full max-w-2/3 bg-gray-800 p-5 rounded-xl shadow-xl flex flex-col gap-5">
                            <h1 className="text-3xl font-bold text-center text-amber-400 tracking-wide">
                                   My Notes
                            </h1>

                            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='type your title here...' maxLength="100" className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                            <textarea onChange={(e) => { setText(e.target.value) }} value={text} className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your note here..." />

                            <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-lg transition duration-300">
                                   Save Note
                            </button>

                            {error && (<p className="text-red-400 text-sm text-center">
                                   {error}
                            </p>)}
                     </form>
                     <div className="mt-6 flex flex-col gap-3 flex-1 overflow-y-auto overflow-x-hidden pr-1 max-h-[50vh]">
                            {
                                   
                            }
                     </div>
              </div>
       )
}

export default Notes