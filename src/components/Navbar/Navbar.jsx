import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import ProfileMenu from './ProfileMenu'

const Navbar = () => {

       return (
              <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl'>
                     <div className='bg-blue-950 rounded-2xl shadow-2xl border border-blue-950 px-6 py-4'>
                            <div className='flex items-center justify-between'>
                                   <NavbarLogo />
                                   <div className='hidden md:block'>
                                          <NavbarLinks />
                                   </div>
                                   <div className='hidden md:block'>
                                          <ProfileMenu />
                                   </div>
                            </div>
                     </div>
              </nav >
       )
}

export default Navbar