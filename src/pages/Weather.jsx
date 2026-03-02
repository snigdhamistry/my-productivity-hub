import React, { useState } from 'react'
import { Search } from 'lucide-react';

const Weather = () => {
       const [city, setCity] = useState('')
       const [error, setError] = useState('')
       const handleSearch = (e) => {
              e.preventDefault()
       }
       const typeCity = (e) => {
              setCity(e.target.value)
       }
       const handleCityChange = () => {
              if (city.trim() === '') {
                     setError('please enter a city name')
                     setCity('')
                     return
              }
              else {
                     setError('')
                     console.log(city)
                     //here i will fetch the weather data for the city entered by the user and display it on the page
              }
       }
       return (
              <div className='bg-black h-screen w-screen flex flex-col items-center justify-start gap-5 pt-10  text-amber-50' >

                     <form onSubmit={handleSearch} className='flex flex-col items-center gap-5'>
                            <h1 className='text-3xl font-bold'>Weather Page</h1>

                            <input type="text" placeholder="Enter city name" onChange={typeCity} value={city} className="bg-gray-500 text-white p-2 rounded-md" />

                            <button onClick={handleCityChange} className="bg-amber-500 text-black p-2 rounded-md flex items-center gap-2 ">Get Weather
                                   <Search />
                            </button>
                            
                            {error && <p className="text-red-500">{error}</p>}
                     </form>

              </div>
       )
}

export default Weather