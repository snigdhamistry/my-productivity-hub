import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLogo = () => {
       return (
              <Link to='/' className='group flex items-center'>

                     <div className='
                     text-lg sm:text-xl md:text-2xl
                     font-bold
                     tracking-tight
                     bg-linear-to-r
                     from-yellow-400
                     via-amber-300
                     to-orange-200
                     bg-clip-text
                     text-transparent
                     group-hover:brightness-110
                     transition duration-300
                     '>
                            Productivity Hub
                     </div>

              </Link>
       )
}

export default NavbarLogo