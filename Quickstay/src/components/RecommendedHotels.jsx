import { useEffect, useState,useMemo } from 'react'
import { useAppContext } from '../context/Appcontext';
import Title from './Title';
import HotelCard from './Hotelcard';

const RecommendedHotels = () => {

    console.log("Rendering RecommendedHotels");

    const { rooms, SearchCities, ShowHotelReg } = useAppContext();

    const [recommended, setRecommended] = useState([]);

    const value = useMemo(() => ({ rooms, SearchCities, ShowHotelReg }), [rooms, SearchCities, ShowHotelReg]);

    const filterHotels = () => {
       const filteredHotels = rooms.filter(room => 
        room?.hotel?.city && SearchCities.includes(room.hotel.city)
        );

        setRecommended(filteredHotels);
    }

    useEffect(() => {
        filterHotels()
    }, [rooms, SearchCities])

    return recommended.length > 0 && (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
            <Title title="Recommended Hotels" subtitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences." />
            <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
                {recommended.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />
                ))}
            </div>
        </div>
    )
}

export default RecommendedHotels