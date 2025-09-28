import axios from "axios";
import { createContext, use, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {useUser,useAuth} from "@clerk/clerk-react"
import {toast} from "react-hot-toast"
import {useContext} from "react"
import { assets } from "../assets/assets";


axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL

const Appcontext = createContext();

export const AppProvider = ({ children }) => {


    const currency = import.meta.env.VITE_CURRENCY || "$";
    const navigate = useNavigate();
    const {user} = useUser();
    const {getToken} = useAuth();
    const [isOwner,setIsOwner] = useState(false);
    const [ShowHotelReg,setShowHotelReg] = useState(false);
    const [SearchCities,setSearchCities] = useState([])
    const [rooms, setRooms] = useState([]);

    const facilityIcons = {
        "Free WiFi": assets.freeWifiIcon,
        "Free Breakfast": assets.freeBreakfastIcon,
        "Room Service": assets.roomServiceIcon,
        "Mountain View": assets.mountainIcon,
        "Pool Access": assets.poolIcon,
    };


    const fetchUser = async ()=>{
        try {
            const {data} = await axios.get("/api/user" , {headers: {Authorization: `Bearer ${await getToken()}`}})
            if(data.success){
                setIsOwner(data.role === "HotelOwner");
                setSearchCities(data.recentSearchCities || []);
            }else{
                // retry to fetch user data after 5 seconds
                setTimeout(() => {
                    fetchUser();
                }, 5000);
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        if(user){
            fetchUser();
        }
    },[user])

    const fetchRooms = async () => {
        try {
        const { data } = await axios.get("/api/rooms");
        if (data.success) {
            setRooms(data.rooms);
        } else {
            toast.error(data.message);
        }
        } catch (error) {
        toast.error(error.response?.data?.message || error.message);
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    

    const value = {
        currency,
        navigate,
        user,
        getToken,
        isOwner,
        setIsOwner,
        ShowHotelReg,
        setShowHotelReg,
        SearchCities,
        setSearchCities,
        rooms,
        setRooms,
        facilityIcons,
        axios
    }


    return(
        <Appcontext.Provider value={value}>
            {children}
        </Appcontext.Provider>
    )
}

export const useAppContext = () => useContext(Appcontext);