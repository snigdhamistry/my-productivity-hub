import React from 'react'
import { Search } from 'lucide-react';

const Weather = () => {
       return (
              <div className='bg-black h-screen w-screen flex flex-col items-center justify-start gap-5 pt-10  text-amber-50' >
                     <h1 className='text-3xl font-bold'>Weather Page</h1>
                     <input type="text" placeholder="Enter city name" className="bg-gray-500 text-white p-2 rounded-md" />
                     <button className="bg-amber-500 text-black p-2 rounded-md flex items-center gap-2 ">Get Weather
                            <Search />
                     </button>
              </div>
       )
}

export default Weather