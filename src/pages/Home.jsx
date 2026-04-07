import React from 'react'

const Home = ({ task, allNotes }) => {
       return (
              <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-4 text-white">

                     <h1 className="text-4xl font-bold text-amber-400 tracking-wide mb-10 text-center">
                            Your Dashboard
                     </h1>

                     <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-8 flex flex-col items-center">

                                   <h1 className="text-xl font-bold text-amber-400 tracking-wide mb-6">
                                          Your Tasks
                                   </h1>

                                   <div className="w-full flex flex-col items-center gap-3">

                                          {task.length === 0 && (
                                                 <p className="text-gray-400 text-sm">
                                                        No tasks added yet 
                                                 </p>
                                          )}

                                          {task.length !== 0 && (
                                                 <>
                                                        <p className="text-5xl font-bold text-white">
                                                               {task.length}
                                                        </p>
                                                        <p className="text-gray-400 text-sm">
                                                               Total Tasks
                                                        </p>
                                                 </>
                                          )}

                                          {
                                                 task.filter((elem) => elem.completed).length !== task.length && task.length !== 0 && (
                                                        <p className="text-sm text-gray-300 mt-2 text-center">
                                                               <span className="text-green-400 font-semibold">
                                                                      {task.filter((elem) => elem.completed).length}
                                                               </span>{" "}
                                                               completed out of{" "}
                                                               <span className="text-amber-400 font-semibold">
                                                                      {task.length}
                                                               </span>
                                                        </p>
                                                 )
                                          }

                                          {
                                                 task.filter((elem) => elem.completed).length === task.length && task.length !== 0 && (
                                                        <p className="text-green-400 text-sm font-semibold mt-2">
                                                               🎉 All tasks completed!
                                                        </p>
                                                 )
                                          }

                                   </div>
                            </div>

                            <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center">

                                   <h1 className="text-xl font-bold text-amber-400 tracking-wide mb-6">
                                          Your Notes
                                   </h1>
                                   {
                                          allNotes.length === 0 && (
                                                 <p className="text-gray-400 text-sm text-center">
                                                        No notes added yet
                                                 </p>
                                          )
                                   }
                                   {allNotes.length !== 0 && (
                                          <p className="text-gray-400 text-sm text-center">
                                                 {allNotes.length} notes added
                                          </p>
                                   )}

                            </div>

                     </div>
              </div>
       )
}

export default Home