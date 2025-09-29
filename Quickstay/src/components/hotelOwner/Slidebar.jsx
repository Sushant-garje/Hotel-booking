import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const sidebarLinks = [
  {
    name: 'Dashboard',
    path: '/owner',
    icon: assets.dashboardIcon,
  },
  {
    name: 'Add Room',
    path: '/owner/add-room',
    icon: assets.addIcon,
  },
  {
    name: 'List Room',
    path: '/owner/list-room',
    icon: assets.listIcon,
  },
]

const linkBaseClasses =
  'group flex items-center py-3 px-3 md:px-5 gap-4 rounded-xl transition-all duration-300'
const iconBaseClasses =
  'w-10 h-10 flex items-center justify-center rounded-lg shadow-md transition-all duration-300'

const Slidebar = () => {
  const location = useLocation()

  return (
    <div className="h-screen md:w-64 w-16 bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.1)] border-r border-gray-300 px-1 sm:px-2 pt-4 sm:pt-6 flex flex-col gap-2 sm:gap-4 transition-all duration-300">
  {sidebarLinks.map(({ name, path, icon }) => {
    const isActive = location.pathname === path
    return (
      <NavLink
        to={path}
        key={name}
        className={
          `${linkBaseClasses} flex items-center md:gap-3 gap-2 px-2 py-3 md:px-3 rounded-xl
          ${isActive
            ? 'bg-gradient-to-r from-blue-500/20 to-blue-100 text-blue-700 shadow-inner border border-blue-400'
            : 'hover:bg-white/40 hover:shadow-md text-gray-700'
          }`
        }
      >
        <div 
          className={
            `${iconBaseClasses} flex items-center justify-center w-8 h-8
            ${isActive ? 'bg-blue-100' : 'bg-white/70 group-hover:bg-white/90'}
            `
          }
        >
          <img src={icon} alt={name} className="w-5 h-5" loading="lazy" />
        </div>
        <span className="hidden md:inline text-sm font-medium whitespace-nowrap">
          {name}
        </span>
      </NavLink>
    )
  })}
</div>

  )
}

export default React.memo(Slidebar)
