import React from 'react'
import { Link } from 'react-router-dom'
const NavbarLogo = () => {
       return (
              <Link to='/' className='flex items-center gap-2 group hover:opacity-80 transition duration-300'>
                     <div className='w-10 h-10 rounded-full bg-linear-to-br from-yellow-400 to-amber-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition duration-300 shrink-0'>
                            <span className='text-blue-950 font-bold text-lg'>P</span>
                     </div>
                     <div className='hidden sm:block text-base font-bold tracking-tight bg-linear-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-yellow-200 transition duration-300'>
                            Productivity Hub
                     </div>
              </Link>
       )
}

export default NavbarLogo