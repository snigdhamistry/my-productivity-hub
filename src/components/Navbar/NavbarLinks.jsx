import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLinks = () => {
       return (
              <div className='flex items-center gap-6'>

                     <Link
                            to='/'
                            className='relative text-white text-lg font-medium hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full'
                     >
                            Home
                     </Link>

                     <Link
                            to='/notes'
                            className='relative text-white text-lg font-medium hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full'
                     >
                            Notes
                     </Link>

                     <Link
                            to='/tasks'
                            className='relative text-white text-lg font-medium hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full'
                     >
                            Tasks
                     </Link>

                     <Link
                            to='https://github.com/snigdhamistry/my-productivity-hub'
                            className='relative text-white text-lg font-medium hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full'
                     >
                            Source Code
                     </Link>

                     

              </div>
       )
}

export default NavbarLinks