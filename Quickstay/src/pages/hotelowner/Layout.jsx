import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Slidebar from '../../components/hotelOwner/Slidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
  <Navbar />
  <div className="flex flex-1 h-full">
    {/* Sidebar: hidden on mobile, visible on md+ */}
    <Slidebar className="hidden sm:flex" />
    <div className="flex-1 p-3 pt-8 sm:p-4 md:px-10 h-full min-h-0 overflow-auto">
      <Outlet />
    </div>
  </div>
</div>

  )
}

export default Layout