import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import Exclusiveoffer from '../components/Exclusiveoffer'
import StarRating from '../components/StarsRating'
import Testimonials from '../components/Testimonials'
import Newslatter from '../components/Newslatter'
import RecommendedHotels from "../components/RecommendedHotels"

const Home = () => {


    return (
        <>
            <Hero />
            <RecommendedHotels />
            <FeaturedDestination />
            <Exclusiveoffer />
            <Testimonials />
            <Newslatter />
        </>
    )
}

export default Home