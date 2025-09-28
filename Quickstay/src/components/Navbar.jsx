import React from 'react'
import { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import {Link,useNavigate,useLocation} from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useAppContext } from '../context/Appcontext';



function Navbar() {
   
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
    ];


    const BookIcon = () => (
        <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.
        org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 11 1v13H7a2 200 0-2 2ZmO
        0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
        </svg>
    )


    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {openSignIn} = useClerk()
    const {user,navigate,isOwner,setShowHotelReg} =  useAppContext()
    const location = useLocation();



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(location.pathname !== "/" || window.scrollY > 20);
        };

        handleScroll(); // run on mount + when pathname changes
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

       

    

  return (
    
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                 <Link to="/">
                    <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} onClick={scrollTo(0,0)} to={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-black"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                   {user &&
                     <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`} onClick={()=>isOwner ? navigate('/owner') : setShowHotelReg(true)}>
                       {isOwner ? "Dashboard" : "List Your Hotel"}
                    </button>
                   }
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <svg className={`h-6 w-6 text-white transition-all duration-500 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    {user ? (
                        <UserButton>
                            <UserButton.MenuItems>
                                      <UserButton.Action label="MyBookings" labelIcon={<BookIcon></BookIcon>} onClick={()=>navigate('/my-bookings ')}/>
                            </UserButton.MenuItems>
                        </UserButton>
                    ) : (
                        <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                    Login
                </button>
                    )}
                    
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    {user &&
                         <UserButton>
                            <UserButton.MenuItems>
                                      <UserButton.Action label="MyBookings" labelIcon={<BookIcon></BookIcon>} onClick={()=>navigate('/my-bookings ')}/>
                            </UserButton.MenuItems>
                        </UserButton>
                    } 

                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                    


                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                    {user && 
                        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all" onClick={()=>isOwner ? navigate('/owner') : setShowHotelReg(true)}>
                         {isOwner ? "Dashboard" : "List Your Hotel"}
                        </button>
                    }

                    {!user && 
                        <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>
                    }
                </div>
            </nav>
     

   
  )
}

export default Navbar