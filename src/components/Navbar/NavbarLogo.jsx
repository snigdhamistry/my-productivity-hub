import React from 'react'
import { Link } from 'react-router-dom'
const NavbarLogo = () => {
       return (
              <Link to='/' className='flex items-center gap-2 group hover:opacity-100 transition duration-300'>
                     
                     <div className='hidden sm:block text-2xl font-bold tracking-tight bg-linear-to-r from-yellow-400 to-amber-100 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-orange-300 transition duration-300'>
                            Productivity Hub
                     </div>
              </Link>
       )
}

export default NavbarLogo