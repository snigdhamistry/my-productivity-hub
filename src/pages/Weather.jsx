import React, { useState } from 'react'
import { Search } from 'lucide-react';

const Weather = () => {
       const [city, setCity] = useState('')
       const [weather, setWeather] = useState('')
       const [error, setError] = useState('')

       const handleInputChange = (e) => {
              setCity(e.target.value)
       }

       const handleGetWeather = () => {
              if (city.trim() === '') {
                     setError('please enter a city name')
                     setCity('')
                     return
              }
              else {
                     setError('')
                     fetchWeatherData()
              }
       }
       const fetchWeatherData = async () => {

       }

       const handleFormSubmit = (e) => {
              e.preventDefault()
       }
       return (
              <div className='bg-black h-screen w-screen flex flex-col items-center justify-start gap-5 pt-10  text-amber-50' >

                     <form onSubmit={handleFormSubmit} className='flex flex-col items-center gap-5'>
                            <h1 className='text-3xl font-bold'>Weather Page</h1>

                            <input type="text" placeholder="Enter city name" onChange={handleInputChange} value={city} className="bg-gray-500 text-white p-2 rounded-md" />

                            <button onClick={handleGetWeather} className="bg-amber-500 text-black p-2 rounded-md flex items-center gap-2 ">Get Weather
                                   <Search />
                            </button>

                            {error && <p className="text-red-500">{error}</p>}
                     </form>

                     <div className='bg-green-400'> 
                            
                     </div>

              </div>
       )
}

export default Weather