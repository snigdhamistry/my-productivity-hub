import React from 'react'
import { Link } from 'react-router-dom'
const NavbarLinks = () => {
       return (
              <div className='flex items-center gap-2'>

                     <Link to='/' className='px-3.5 py-2 rounded-lg text-xl font-medium text-white  hover:text-yellow-400 transition duration-300 relative group'>
                            Home
                     </Link>

                     <Link to='/notes' className='px-3.5 py-2 rounded-lg text-xl font-medium text-white  hover:text-yellow-400 transition duration-300 relative group'>
                            Notes
                     </Link>

                     <Link to='/tasks' className='px-3.5 py-2 rounded-lg text-xl font-medium text-white  hover:text-yellow-400 transition duration-300 relative group'>
                            Tasks
                     </Link>

                     <Link to='/weather' className='px-3.5 py-2 rounded-lg text-xl font-medium text-white  hover:text-yellow-400 transition duration-300 relative group'>
                            Weather
                     </Link>
              </div>
       )
}

export default NavbarLinks