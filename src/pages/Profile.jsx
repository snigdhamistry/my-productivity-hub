import React from 'react'
import { Link } from 'react-router-dom'
const Profile = () => {
       return (
              <>
                     You can see your profile here
                     <Link to='/' className='text-blue-500 hover:underline'>Go back to Home</Link>
              </>
       )
}

export default Profile