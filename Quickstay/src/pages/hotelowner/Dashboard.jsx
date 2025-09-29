import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/Appcontext'
import { useEffect } from 'react'

const Dashboard = () => {
      const { currency, user, getToken, toast, axios } = useAppContext();

    const [dashboardData, setDashboardData] = useState({
        bookings: [],
        totalBookings: 0,
        totalRevenue: 0,
    });

    const fetchDashboardData = async () => {
        try {
            const { data } = await axios.get('/api/bookings/hotel', { headers: { Authorization: `Bearer ${await getToken()}` } })
            if (data.success) {
                setDashboardData(data.dashboardData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (user) {
            fetchDashboardData();
        }
    }, [user]);

  return (
    <div className="w-full px-2 sm:px-4 py-4 sm:py-6">
  <Title
    align="left"
    font="outfit"
    title="Dashboard"
    subtitle="Monitor your room listings, track bookings and analyze revenue—all in one place."
  />

  {/* Summary Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">
    {/* Total Bookings */}
    <div className="bg-white/30 backdrop-blur-md shadow-lg border border-blue-100 rounded-xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5">
      <img
        src={assets.totalBookingIcon}
        alt="Total Bookings"
        className="h-10 sm:h-12 hidden sm:block"
      />
      <div>
        <p className="text-blue-600 text-base sm:text-lg font-semibold">Total Bookings</p>
        <p className="text-gray-700 text-base sm:text-lg">{dashboardData.totalBookings}</p>
      </div>
    </div>

    {/* Total Revenue */}
    <div className="bg-white/30 backdrop-blur-md shadow-lg border border-blue-100 rounded-xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5">
      <img
        src={assets.totalRevenueIcon}
        alt="Total Revenue"
        className="h-10 sm:h-12 hidden sm:block"
      />
      <div>
        <p className="text-blue-600 text-base sm:text-lg font-semibold">Total Revenue</p>
        <p className="text-gray-700 text-base sm:text-lg">₹{dashboardData.totalRevenue}</p>
      </div>
    </div>
  </div>

  {/* Recent Bookings */}
  <h2 className="text-lg sm:text-xl text-blue-950 font-semibold mt-10 sm:mt-12 mb-3 sm:mb-4">
    Recent Bookings
  </h2>
  <div className="w-full max-w-4xl rounded-xl overflow-x-auto shadow-md border border-gray-200 bg-white/40 backdrop-blur-lg max-h-80 overflow-y-auto">
    <table className="w-full min-w-[500px] text-sm">
      <thead className="bg-gray-100 text-gray-800">
        <tr>
          <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">User Name</th>
          <th className="py-2 px-2 sm:py-3 sm:px-4 text-left hidden md:table-cell">Room Name</th>
          <th className="py-2 px-2 sm:py-3 sm:px-4 text-center">Total Amount</th>
          <th className="py-2 px-2 sm:py-3 sm:px-4 text-center">Payment Status</th>
        </tr>
      </thead>
      <tbody className="bg-white/50">
        {dashboardData.bookings.map((item, index) => (
          <tr key={index} className="border-t border-gray-300 text-gray-700">
            <td className="py-2 px-2 sm:py-3 sm:px-4">{item.user.username}</td>
            <td className="py-2 px-2 sm:py-3 sm:px-4 hidden md:table-cell">{item.room.roomType}</td>
            <td className="py-2 px-2 sm:py-3 sm:px-4 text-center">₹{item.totalPrice}</td>
            <td className="py-2 px-2 sm:py-3 sm:px-4 text-center">
              <span
                className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold 
                  ${item.isPaid ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}
                `}
              >
                {item.isPaid ? 'Completed' : 'Pending'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* For mobile: Show bookings summary as cards if desired */}
  
   {/* <div className="md:hidden flex flex-col gap-2 mt-6">
      {dashboardData.bookings.map((item, idx) => (
        <div key={idx} className="bg-white backdrop-blur rounded-lg p-3 flex flex-col shadow-sm border">
          <span className="font-semibold text-blue-950">{item.user.username}</span>
          <span className="text-gray-500 text-xs mb-1">{item.room.roomType}</span>
          <span className="text-blue-700 font-semibold">₹{item.totalPrice}</span>
          <span className={`mt-1 inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
            item.isPaid ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
          }`}>
            {item.isPaid ? 'Completed' : 'Pending'}
          </span>
        </div>
      ))}
    </div> */}
 
</div>

  )
}

export default Dashboard 

// <div className="w-full  px-4 py-6">
    //   <Title
    //     align="left"
    //     font="outfit"
    //     title="Dashboard"
    //     subtitle="Monitor your room listings, track bookings and analyze revenue—all in one place."
    //   />

    //   <div className="grid sm:grid-cols-2 gap-6 mt-10">
    //     {/* Total Bookings */}
    //     <div className="bg-white/30 backdrop-blur-md shadow-lg border border-blue-100 rounded-xl p-6 flex items-center gap-5">
    //       <img src={assets.totalBookingIcon} alt="Total Bookings" className="h-12 hidden sm:block" />
    //       <div>
    //         <p className="text-blue-600 text-lg font-semibold">Total Bookings</p>
    //         <p className="text-gray-700 text-base">{dashboardData.totalBookings}</p>
    //       </div>
    //     </div>

    //     {/* Total Revenue */}
    //     <div className="bg-white/30 backdrop-blur-md shadow-lg border border-blue-100 rounded-xl p-6 flex items-center gap-5">
    //       <img src={assets.totalRevenueIcon} alt="Total Revenue" className="h-12 hidden sm:block" />
    //       <div>
    //         <p className="text-blue-600 text-lg font-semibold">Total Revenue</p>
    //         <p className="text-gray-700 text-base">₹{dashboardData.totalRevenue}</p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Recent Bookings */}
    //   <h2 className="text-xl text-blue-950 font-semibold mt-12 mb-4">Recent Bookings</h2>
    //   <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white/40 backdrop-blur-lg max-h-80 overflow-y-auto">
    //     <table className="w-full text-sm">
    //       <thead className="bg-gray-100 text-gray-800">
    //         <tr>
    //           <th className="py-3 px-4 text-left">User Name</th>
    //           <th className="py-3 px-4 text-left max-sm:hidden">Room Name</th>
    //           <th className="py-3 px-4 text-center">Total Amount</th>
    //           <th className="py-3 px-4 text-center">Payment Status</th>
    //         </tr>
    //       </thead>
    //       <tbody className="bg-white/50">
    //         {dashboardData.bookings.map((item, index) => (
    //           <tr key={index} className="border-t border-gray-300 text-gray-700">
    //             <td className="py-3 px-4">{item.user.username}</td>
    //             <td className="py-3 px-4 max-sm:hidden">{item.room.roomType}</td>
    //             <td className="py-3 px-4 text-center">₹{item.totalPrice}</td>
    //             <td className="py-3 px-4 text-center">
    //               <span
    //                 className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
    //                   item.isPaid ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
    //                 }`}
    //               >
    //                 {item.isPaid ? 'Completed' : 'Pending'}
    //               </span>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>