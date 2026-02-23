import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
       return (
              <div>
                     <Link to='/'>Home</Link>
                     <Link to='/Notes'>Notes</Link>
                     <Link to='/Tasks'>Tasks</Link>
                     <Link to='/Weather'>Weather</Link>
              </div>
       )
}

export default Navbar