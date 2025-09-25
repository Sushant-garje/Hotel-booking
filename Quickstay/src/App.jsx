import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/Roomdetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelowner/Layout';
import Dashboard from './pages/hotelowner/Dashboard';
import AddRoom from './pages/hotelowner/Addrooms';
import ListRoom from './pages/hotelowner/Listroom';
import Experience from './pages/Experience';
import About from './pages/About';


function App() {

  const isOwner = useLocation().pathname.includes('/owner');



  return (

    <div>
       {!isOwner && <Navbar/>}
      {false && <HotelReg/>}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/rooms' element={<AllRooms/>}/>
        <Route path="/rooms/:id/:index" element={<RoomDetails/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>

          <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='add-room' element={<AddRoom/>} />
            <Route path='list-room' element={<ListRoom/>} />
          </Route>

      </Routes>  
      </div>   
    </div>
  )
}

export default App
