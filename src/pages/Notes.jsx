import React from 'react'
import { useState } from 'react';
import { Menu } from 'lucide-react';

const Notes = () => {
       const [input, setInput] = useState('')
       const [text, setText] = useState('')
       const [allNotes, setAllNotes] = useState([])
       const [toggle, setToggle] = useState(false)
       const [error, setError] = useState('')

       const addtask = (e) => {
              e.preventDefault()
              if (input.trim() === '' || text.trim() === '') {
                     setError("please fill all the fields")
              } else {
                     setError('')
                     setAllNotes([
                            ...allNotes,
                            { title: input, text: text }
                     ])
              }
       }

       const toggleMenu = () => {
              setToggle(prev => !prev)
       }

       return (
              <div className="h-screen bg-[#0f172a] text-white overflow-hidden">

                     {/* 🔹 SIDEBAR */}
                     <div className={`fixed top-20 left-0 h-[calc(100%-4rem)] w-80 bg-[#111827] border-r border-gray-800 transform transition-transform duration-300 ease-in-out z-40 
                     ${toggle ? "translate-x-0" : "-translate-x-full"}`}>

                            <h1 className="text-2xl font-bold text-amber-400 mb-4 px-4">
                                   Your Notes
                            </h1>
                            <div className="p-4 flex flex-col gap-3 h-full overflow-y-auto">
                                   {allNotes.map((elem, index) => (
                                          <div
                                                 key={index}
                                                 className="bg-[#1f2937] p-3 rounded-lg hover:bg-[#374151] transition cursor-pointer"
                                          >
                                                 <h3 className="text-sm font-semibold text-amber-400 truncate">
                                                        {elem.title}
                                                 </h3>
                                                 <p className="text-xs text-gray-400 truncate">
                                                        {elem.text}
                                                 </p>
                                          </div>
                                   ))}
                            </div>
                     </div>

                     {/* 🔹 MAIN CONTENT */}
                     <div className="pt-20 px-4 flex justify-center">

                            {/* 🔹 EXTRA HAMBURGER (when navbar hidden) */}
                            <button
                                   onClick={toggleMenu}
                                   className="fixed top-4 left-4 z-50 p-2 rounded-md hover:bg-gray-800 transition"
                            >
                                   <Menu />
                            </button>

                            <form
                                   onSubmit={addtask}
                                   className="w-full max-w-2xl bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-gray-800 flex flex-col gap-5"
                            >
                                   <h1 className="text-2xl font-semibold text-center text-amber-400">
                                          My Notes
                                   </h1>

                                   <input
                                          value={input}
                                          onChange={(e) => setInput(e.target.value)}
                                          type="text"
                                          placeholder="Type your title..."
                                          maxLength="100"
                                          className="bg-[#0f172a] px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-500"
                                   />

                                   <textarea
                                          onChange={(e) => setText(e.target.value)}
                                          value={text}
                                          placeholder="Write your note..."
                                          className="bg-[#0f172a] px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-500 resize-none h-32"
                                   />

                                   <button
                                          type="submit"
                                          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 rounded-lg transition"
                                   >
                                          Save Note
                                   </button>

                                   {error && (
                                          <p className="text-red-400 text-sm text-center">
                                                 {error}
                                          </p>
                                   )}
                            </form>
                     </div>
              </div>
       )
}

export default Notes