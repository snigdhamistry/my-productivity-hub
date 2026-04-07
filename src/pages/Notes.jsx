import React from 'react'
import { useState } from 'react';
import { Menu, Trash2, Pencil } from 'lucide-react';

const Notes = ({ allNotes, setAllNotes }) => {
       const [input, setInput] = useState('')
       const [text, setText] = useState('')
       const [editNote, setEditNote] = useState(null)
       const [toggle, setToggle] = useState(false)
       const [error, setError] = useState('')

       const addtask = (e) => {
              e.preventDefault()
              if (input.trim() === '' || text.trim() === '') {
                     setError("please fill all the fields")
              } else {
                     setError('')
                     // setAllNotes([
                     //        ...allNotes,
                     //        { id: Date.now(), title: input, text: text }
                     // ])
                     if (editNote !== null) {
                            // UPDATE EXISTING NOTE
                            const updatedNotes = [...allNotes]
                            updatedNotes[editNote] = {
                                   ...updatedNotes[editNote],
                                   title: input,
                                   text: text
                            }
                            setAllNotes(updatedNotes)
                            setEditNote(null) // back to normal mode
                     } else {
                            // ADD NEW NOTE
                            setAllNotes([
                                   ...allNotes,
                                   { id: Date.now(), title: input, text: text }
                            ])
                     }
              }
              setInput('')
              setText('')
       }

       const editNotesSection = (index) => {
              setInput(allNotes[index].title)
              setText(allNotes[index].text)
              setEditNote(index)
       }

       const toggleMenu = () => {
              setToggle(prev => !prev)
       }

       return (
              <div className="h-screen bg-[#0f172a] text-white overflow-auto">

                     {/* 🔹 SIDE BAR */}
                     <div className={`fixed top-24 bottom-4 pb-3 left-0 w-80 bg-[#2e3748] border-t border-b border-r border-yellow-400 transform transition-transform duration-300 ease-in-out z-40 flex flex-col ${toggle ? "translate-x-0" : "-translate-x-full"}`}>

                            <div className="flex items-center justify-between px-4">
                                   <h1 className="text-2xl font-bold text-amber-400 mb-4 px-2 pt-2 hover:text-amber-600 transition">
                                          Your Notes
                                   </h1>
                                   {
                                          allNotes.length > 0 && (<button
                                                 onClick={() => setAllNotes([])}
                                                 className="p-2 rounded-md">
                                                 <Trash2 size={22} className="text-red-400 hover:text-red-500 cursor-pointer" />
                                          </button>)
                                   }

                            </div>
                            <div className="p-4 flex flex-col gap-3 flex-1 overflow-y-auto pb-5">
                                   {allNotes.length === 0 && (<p className="text-gray-500 text-center py-4">
                                          No notes to display.
                                   </p>)}
                                   {allNotes.map((elem, index) => (
                                          <div
                                                 key={index}
                                                 className="relative bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition">
                                                 <h3 className="text-lg font-semibold text-amber-400 truncate">
                                                        {elem.title}
                                                 </h3>
                                                 <p className="text-xs text-gray-400 truncate">
                                                        {elem.text}
                                                 </p>
                                                 <button
                                                        onClick={() => editNotesSection(index)}
                                                        className="absolute top-1 right-8 p-1 cursor-pointer">
                                                        <Pencil size={15} />
                                                 </button>
                                                 <button
                                                        onClick={() => {
                                                               const newNotes = allNotes.filter((elem, idx) => idx !== index)
                                                               setAllNotes(newNotes)
                                                        }}
                                                        className="absolute top-1 right-1 p-1 cursor-pointer">
                                                        <Trash2 size={15} />
                                                 </button>
                                          </div>
                                   ))}
                            </div>

                     </div>

                     {/* 🔹 MAIN CONTENT */}
                     <div className="pt-30 px-4 flex justify-center">
                            <button
                                   onClick={toggleMenu}
                                   className="fixed top-6 left-4 z-50 p-2 rounded-md hover:bg-gray-800 transition">
                                   <Menu size={30} />
                            </button>
                            <form
                                   onSubmit={addtask}
                                   className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-lg border border-gray-800 flex flex-col gap-1 px-6 py-4">

                                   <h1 className="text-3xl font-bold text-center text-amber-400 pb-4 tracking-wide">
                                          {editNote !== null ? "Edit Your Note" : "Create a New Note"}
                                   </h1>
                                   <input
                                          value={input}
                                          onChange={(e) => setInput(e.target.value)}
                                          type="text"
                                          placeholder="Type your title..."
                                          maxLength={80}
                                          className="bg-gray-700 px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-400" />
                                   <p className="text-xs text-gray-400 text-right pr-1">
                                          {input.length}/80
                                   </p>
                                   <textarea
                                          onChange={(e) => setText(e.target.value)}
                                          value={text}
                                          placeholder="Write your note..."
                                          className="bg-gray-700 px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-400 resize-none h-70" />
                                   <button
                                          type="submit"
                                          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 mt-4 rounded-lg transition">
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