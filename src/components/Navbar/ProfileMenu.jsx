import React from 'react'
import { Link } from 'react-router-dom'

const ProfileMenu = () => {
       return (
              <Link
                     to='/profile'
                     className='flex items-center gap-2 px-5 py-2.5 rounded-lg 
                     bg-linear-to-r from-yellow-400 to-amber-500
                     text-blue-950 font-semibold text-sm
                     shadow-md
                     hover:shadow-yellow-400/40
                     hover:-translate-y-0.5
                     hover:scale-105
                     transition-all duration-300'
              >

                     <svg className='w-4 h-4 transition duration-300 group-hover:rotate-12'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                     >
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                   d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                            />
                     </svg>

                     Profile

              </Link>
       )
}

export default ProfileMenu