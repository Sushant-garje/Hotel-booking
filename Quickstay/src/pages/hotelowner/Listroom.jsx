import React, { useEffect } from 'react'
import Title from '../../components/Title'
import { useAppContext } from '../../context/Appcontext';
import toast from 'react-hot-toast';

const ListRoom = () => {

    const { axios, getToken, user } = useAppContext()
    const [rooms, setRooms] = React.useState([])

    // Fetch Rooms of the Hotel Owner
    const fetchRooms = async () => {
        try {
            const { data } = await axios.get('/api/rooms/owner', { headers: { Authorization: `Bearer ${await getToken()}` } })
            if (data.success) {
                setRooms(data.rooms)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Toggle Availability of the Room
    const toggleAvailability = async (roomId) => {
        const { data } = await axios.post("/api/rooms/toggle-availability", { roomId }, { headers: { Authorization: `Bearer ${await getToken()}` } })
        if (data.success) {
            toast.success(data.message)
            fetchRooms()
        } else {
            toast.error(data.message)
        }
    }

    // Fetch Rooms when user is logged in
    useEffect(() => {
        if (user) {
            fetchRooms()
        }
    }, [user])

    return (
       <div className="max-w-4xl w-full mx-auto px-3 sm:px-0">
  <Title
    align="left"
    font="outfit"
    title="Room Listings"
    subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
  />
  <p className="text-gray-500 mt-8 font-medium">Total Hotels</p>

  <div className="w-full max-w-3xl mt-3 border border-gray-300 rounded-lg max-h-80 overflow-y-auto shadow-sm bg-white">
    <table className="w-full table-auto min-w-[480px]">
      <thead className="bg-gray-50">
        <tr>
          <th className="py-3 px-4 text-gray-800 font-semibold text-left">Name</th>
          <th className="py-3 px-4 text-gray-800 font-semibold text-left hidden sm:table-cell">Facility</th>
          <th className="py-3 px-4 text-gray-800 font-semibold text-left">Price / night</th>
          <th className="py-3 px-4 text-gray-800 font-semibold text-center w-24">Actions</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {rooms.map((item, index) => (
          <tr key={index} className="border-t border-gray-300 hover:bg-gray-50 transition-colors">
            <td className="py-3 px-4 text-gray-700">{item.roomType}</td>
            <td className="py-3 px-4 text-gray-500 hidden sm:table-cell whitespace-normal max-w-xs">
              {item.amenities.join(', ')}
            </td>
            <td className="py-3 px-4 text-gray-700">
              {import.meta.env.VITE_CURRENCY}
              {item.pricePerNight}
            </td>
            <td className="py-3 px-4 text-center">
              <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3 select-none">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={() => toggleAvailability(item._id)}
                  checked={item.isAvailable}
                />
                <div className="w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200"></div>
                <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    )
}

export default ListRoom