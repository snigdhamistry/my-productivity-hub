import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import ProfileMenu from './ProfileMenu'
import { Menu } from "lucide-react";

const Navbar = () => {
       return (
              <nav className='fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl'>
                     <div className='
                     backdrop-blur-xl
                     bg-blue-950/80
                     border border-blue-800/40
                     rounded-2xl
                     shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                     px-4 py-2 md:px-6 md:py-2
                     transition-all duration-300
                     '>

                            <div className='flex items-center justify-between'>

                                   <NavbarLogo />

                                   <div className='hidden md:flex'>
                                          <NavbarLinks />
                                   </div>

                                   <div className='hidden md:flex'>
                                          <ProfileMenu />
                                   </div>

                                   <button className="md:hidden text-white p-2 rounded-lg hover:bg-blue-900 transition">
                                          <Menu size={24} />
                                   </button>

                            </div>

                     </div>
              </nav>
       )
}

export default Navbar