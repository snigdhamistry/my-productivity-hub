import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import ProfileMenu from './ProfileMenu'

const Navbar = () => {
       const [isOpen, setIsOpen] = useState(false)

       return (
              <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl'>
                     <div className='bg-blue-950 rounded-2xl shadow-2xl border border-blue-900 px-6 py-4'>
                            <div className='flex items-center justify-between'>
                                   <NavbarLogo />
                                   
                                   {/* Desktop Navigation */}
                                   <div className='hidden md:block'>
                                          <NavbarLinks />
                                   </div>
                                   
                                   <div className='flex items-center gap-4'>
                                          {/* Mobile Menu Button */}
                                          <button
                                                 onClick={() => setIsOpen(!isOpen)}
                                                 className='md:hidden flex flex-col gap-1.5 focus:outline-none group'
                                          >
                                                 <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                                 <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                                                 <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                          </button>
                                          
                                          {/* Desktop Profile Button */}
                                          <div className='hidden md:block'>
                                                 <ProfileMenu />
                                          </div>
                                   </div>
                            </div>
                            
                            {/* Mobile Navigation Menu */}
                            {isOpen && (
                                   <div className='md:hidden mt-4 pt-4 border-t border-blue-700 flex flex-col gap-2'>
                                          <Link
                                                 to='/'
                                                 className='px-4 py-2 rounded-lg text-sm font-medium text-blue-50 hover:bg-blue-800 hover:text-yellow-400 transition duration-300'
                                                 onClick={() => setIsOpen(false)}
                                          >
                                                 Home
                                          </Link>
                                          <Link
                                                 to='/notes'
                                                 className='px-4 py-2 rounded-lg text-sm font-medium text-blue-50 hover:bg-blue-800 hover:text-yellow-400 transition duration-300'
                                                 onClick={() => setIsOpen(false)}
                                          >
                                                 Notes
                                          </Link>
                                          <Link
                                                 to='/tasks'
                                                 className='px-4 py-2 rounded-lg text-sm font-medium text-blue-50 hover:bg-blue-800 hover:text-yellow-400 transition duration-300'
                                                 onClick={() => setIsOpen(false)}
                                          >
                                                 Tasks
                                          </Link>
                                          <Link
                                                 to='/weather'
                                                 className='px-4 py-2 rounded-lg text-sm font-medium text-blue-50 hover:bg-blue-800 hover:text-yellow-400 transition duration-300'
                                                 onClick={() => setIsOpen(false)}
                                          >
                                                 Weather
                                          </Link>
                                          <div className='mt-2 pt-2 border-t border-blue-700'>
                                                 <ProfileMenu />
                                          </div>
                                   </div>
                            )}
                     </div>
              </nav>
       )
}

export default Navbar