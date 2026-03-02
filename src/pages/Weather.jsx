import React, { useState } from 'react'
import { Search } from 'lucide-react';

const Weather = () => {

       const [city, setCity] = useState('')
       const [weather, setWeather] = useState(null)
       const [loading, setloading] = useState(false)
       const [error, setError] = useState('')

       const handleInputChange = (e) => {
              setCity(e.target.value)
              console.log(city)
       }

       const handleGetWeather = () => {
              if (city.trim() === '') {
                     setError('please enter a city name')
                     setCity('')
                     setWeather(null)
                     return
              }
              setloading(true)
              setError('')
              fetchWeatherData()
       }

       const fetchWeatherData = async () => {
              try {
                     const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`)
                     const data = await response.json()
                     if (data.location.name.toLowerCase() !== city.toLowerCase()) {
                            setError('Please enter the full city name')
                            setWeather(null)
                            setloading(false)
                            return
                     }
                     let localTime = new Date(data.location.localtime).toLocaleString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                     })
                     setloading(false)
                     setWeather({ ...data, localTime })
                     console.log(data)
              }
              catch (error) {
                     setError('Failed to fetch weather data. Please try again later.')
              }
       }

       const handleFormSubmit = (e) => {
              e.preventDefault()
       }

       return (
              <div className='bg-black h-screen w-screen flex flex-col items-center justify-start gap-5 pt-10  text-amber-50' >

                     <form onSubmit={handleFormSubmit} className='flex flex-col items-center gap-5'>
                            <h1 className='text-3xl font-bold'>Weather Page</h1>

                            <input onChange={handleInputChange} type="text" placeholder="Enter city name" value={city} className="bg-gray-500 text-white p-2 rounded-md" />

                            <button onClick={handleGetWeather} className="bg-amber-500 text-black p-2 rounded-md flex items-center gap-2 ">Get Weather
                                   <Search />
                            </button>

                            {loading && <p className="text-green-500">Loading...</p>}

                            {error && <p className="text-red-500">{error}</p>}
                     </form>

                     <div className='mt-10' >
                            {
                                   weather && (
                                          <div className='flex flex-col items-center gap-5 bg-amber-200 p-5 rounded-md text-black' >
                                                 <h2 className='text-2xl font-semibold'>Name: {weather.location.name}</h2>
                                                 <h2 className='text-lg'>Local Time: {weather.localTime}</h2>
                                                 <p className='text-lg'>Temperature: {weather.current.temp_c}°C</p>
                                                 <p className='text-lg'>Feels Like: {weather.current.feelslike_c}°C</p>
                                                 <p className='text-lg'>Condition: {weather.current.condition.text}</p>
                                                 <p className='text-lg'>Humidity: {weather.current.humidity}%</p>
                                                 <p className='text-lg'>Wind Speed: {weather.current.wind_kph} km/h</p>
                                                 <p className='text-lg'>Wind Direction: {weather.current.wind_dir}</p>
                                                 <p className='text-lg'>Country: {weather.location.country}</p>
                                                 <p className='text-lg'>Region: {weather.location.region}</p>
                                                 <p className='text-lg'>Current Condition: {weather.current.condition.text}</p>
                                          </div>
                                   )
                            }
                     </div>

              </div>
       )
}

export default Weather