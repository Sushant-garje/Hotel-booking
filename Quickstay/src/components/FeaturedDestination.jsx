import React from 'react'
import Title from './Title'
import { roomsDummyData } from '../assets/assets'
import Hotelcard from './Hotelcard'
import { useNavigate } from 'react-router-dom'

function FeaturedDestination() {
  const navigate = useNavigate()

  const handleViewAll = () => {
    navigate('/rooms')
    // Smooth scroll to top for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-white py-20'>
      <Title
        title='Featured Destination'
        subtitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'
      />

      <div className='flex flex-wrap items-center justify-center gap-8 mt-16 w-full'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <Hotelcard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={handleViewAll}
        className='mt-16 px-6 py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition-all shadow-sm hover:shadow-md'
      >
        View All Destinations
      </button>
    </div>
  )
}

export default React.memo(FeaturedDestination)
