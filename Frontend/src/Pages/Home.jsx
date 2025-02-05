import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Search from './Search'
import ContactUs from '../Components/ContactUs/ContactUs'
import VideoExplain from '../Components/VideoExplain/VideoExplain'



const Home = () => {
  return (
   <>
   <Hero />
   <Search />
   <VideoExplain />
   <ContactUs />
  
   </>
    
  )
}

export default Home